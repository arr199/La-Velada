/* eslint-disable react/react-in-jsx-scope */
import logo from '../images/logo.webp'

export const Header = () => {
  return (
        <header className=" relative h-[30vh] lg:h-10">
            <div className="absolute  w-screen mt-4">
                <img className=" inset-0 mx-auto w-[120px] lg:w-56 top-[20px] animate-fade animate-duration-[5s]"
                    src={logo}>
                </img>
                <h1 className="text-[48px] mt-2 text-white text-center animate-fade animate-duration-1000 animate-ease-in-out animate-delay-[2s]">la velada del AÑO <span className="text-yellow-300">III</span></h1>
            </div>
        </header>
  )
}
