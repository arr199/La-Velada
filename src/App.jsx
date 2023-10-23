/* eslint-disable react/react-in-jsx-scope */
import { MainSection } from './assets/components/MainSection'
import { Header } from './assets/components/Header'
import { useEffect } from 'react'

function useHoverEffect () {
  useEffect(() => {
    const mainSectionEl = document.querySelector('#main-section')
    const $ = selector => document.querySelectorAll(selector)
    // CREATING AN ARRAY WITH ALL THE LEFT IMAGE AND ANOTHER ONE WITH RIGHT IMAGES //
    const leftImage = Array.from($('.left-image-container > img'))
    const rightImage = Array.from($('.right-image-container > img'))
    // SET THE HOVER EFFECT OF THE IMAGES //
    function hoverEffect (e) {
      // GETTING THE INDEX IF THE IMAGE ARE HOVERING WHICH WILL BE THE SAME OF THE OPPOSITIVE IMAGE //
      const index = leftImage.includes(e.target) ? leftImage.indexOf(e.target) // eslint-disable-line multiline-ternary
                  : rightImage.includes(e.target) ? rightImage.indexOf(e.target) // eslint-disable-line indent, multiline-ternary
          : null
      // IF OUR TARGET IS AN IMAGE THEN REMOVE THE PREVOIUS STYLES ATTRIBUTE AND SET THE NEW SCALE //
      if (e.target.tagName === 'IMG') {
        leftImage[index].removeAttribute('style')
        rightImage[index].removeAttribute('style')
        leftImage[index].setAttribute('style', 'scale : 1.3')
        rightImage[index].setAttribute('style', 'scale : 1.3')

        // REMOVE THE PREVIOUS STYLES OF THE REST OF THE IMAGES IN BOTH ARRAY AND SET A BLACK AND WHITE EFFECT //
        leftImage.forEach((e, eIndex) => {
          if (eIndex !== index) {
            e.removeAttribute('style')
            e.setAttribute('style', 'filter: grayscale(100%)')
          }
        })
        rightImage.forEach((e, eIndex) => {
          if (eIndex !== index) {
            e.removeAttribute('style')
            e.setAttribute('style', 'filter: grayscale(100%)')
          }
        })
      }
    }
    // REMOVE THE HOVER EFFECT ONCE WE ARE NOT HOVERING THE IMG //
    function removeHoverEffect (e) {
      if (leftImage.includes(e.target) || rightImage.includes(e.target)) {
        leftImage.forEach(e => e.removeAttribute('style'))
        rightImage.forEach(e => e.removeAttribute('style'))
      }
    }
    mainSectionEl.addEventListener('mouseover', hoverEffect)
    mainSectionEl.addEventListener('mouseout', removeHoverEffect)
    // CLEANING UP THE EVENT LISTENER
    return () => {
      mainSectionEl.removeEventListener('mouseover', hoverEffect)
      mainSectionEl.removeEventListener('mouseout', removeHoverEffect)
    }
  }, [])
}

function App () {
  // IMAGE HOVER EFFECT //
  useHoverEffect()

  return (
    <>

      <main className="  bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen  relative  lg:overflow-hidden">
      <Header></Header>
      <MainSection></MainSection>
      </main>
    </>

  )
}

export default App
