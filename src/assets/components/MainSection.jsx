/* eslint-disable react/react-in-jsx-scope */
import coscu from '../images/coscu.webp'
import mayichi from '../images/mayichi.webp'
import viruzz from '../images/viruzz.webp'
import fernanfloo from '../images/fernanfloo.webp'
import laRivers from '../images/la-rivers.webp'
import papigavi from '../images/papigavi.webp'
import german from '../images/german.webp'
import amouranth from '../images/amouranth.webp'
import shelao from '../images/shelao.webp'
import luzu from '../images/luzu.webp'
import rivers from '../images/rivers.webp'
import ampeter from '../images/ampeter.webp'

export const MainSection = () => {
  return (
        <section id="main-section" className="relative h-[45vh] lg:h-screen [&>div>img]:transition-all [&>div>img]:duration-300 ">
        {/*  LEFT IMAGES CONTAINER  */ }
        <div className="left-image-container [&>img]:absolute [&>img]:bottom-0  ">
          <img
            className=" z-50 h-[90%] animate-fade-right animate-duration-400 animate-ease-in-out  "
            src={coscu} alt="" />
          <img className="z-40 h-[73%] left-[3%] animate-fade-right animate-duration-1000 animate-ease-in-out animate-delay-[.6s]"
            src={mayichi} alt="" />
          <img className="z-30 h-[68%] left-[9%] animate-fade-right animate-duration-1000 animate-ease-in-out animate-delay-[.8s]"
            src={viruzz} alt="" />
          <img className="z-20 h-[65%] left-[15%] animate-fade-right animate-duration-1000 animate-ease-in-out animate-delay-[1s]"
            src={fernanfloo} alt="" />
          <img className="z-10 h-[60%] left-[22%] animate-fade-right animate-duration-1000 animate-ease-in-out animate-delay-[1.2s]"
            src={laRivers} alt="" />
          <img className="z-0 h-[55%] left-[25%] animate-fade-right animate-duration-1000 animate-ease-in-out animate-delay-[1.4s]"
            src={papigavi} alt="" />
        </div>
        {/*  RIGHT IMAGES CONTAINER  */ }
        <div className="right-image-container [&>img]:absolute [&>img]:bottom-0 ">
          <img className="z-50 h-[90%] right-0  animate-fade-left animate-duration-400 animate-ease-in-out"
            src={german} alt="" />
          <img className="z-40 h-[73%] right-[3%]  animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-[.6s]"
            src={amouranth} alt="" />
          <img className="z-30 h-[68%] right-[9%]  animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-[.8s]"
            src={shelao} alt="" />
          <img className="z-20 h-[65%] right-[15%] animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-[1s]"
             src={luzu} alt="" />
          <img className="z-10 h-[60%] right-[21%] animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-[1.2s]"
            src={rivers} alt="" />
          <img className="z-0 h-[55%]  right-[24%] animate-fade-left animate-duration-1000 animate-ease-in-out animate-delay-[1.4s]"
            src={ampeter} alt="" />
        </div>
        {/*  INFO CONTAINER  */ }
        <div className=" z-[60] text-black grid absolute  lg:w-[max-content]  lg:h-[max-content] h-[30vh] inset-0 mx-auto
         mt-[45vh]  bg-white  [&>a]:cursor-pointer [&>a]:px-4 [&>a]:py-2
         animate-fade animate-duration-1000 animate-ease-in-out animate-delay-[2.2s]">
            <h1 className="bg-white text-[72px] px-4  text-center" >1 de <span >JULIO</span></h1>
            <a href="https://twicht.tv/ibai" target="_blank" className="bg-black relative flex justify-center text-indigo-200 text-[46px] h-20 " rel="noreferrer">
              <span className="absolute hover:scale-110 transition-all duration-150"> twicht.tv/
                <span className="text-indigo-600 ">ibai
                </span>
              </span></a>
            <a href="#" className="bg-blue-800 text-[36px] flex justify-center text-white relative h-16"><span className="absolute hover:scale-110 transition-all duration-150 ">comprar entradas</span></a>
        </div>
        </section>
  )
}
