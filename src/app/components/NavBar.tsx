'use client'
import React, { createContext, useState } from 'react'
import { Link } from 'react-scroll'
import { WiMoonWaxingCrescent3, WiDaySunny } from "react-icons/wi"
import { useTheme } from 'next-themes'
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
    label: string,
    page: string
}

const NAV_ITEMS: Array<NavItem> = [{
    label: "Inicio",
    page: "home"
},
{
    label: "Sobre Mi",
    page: "about"
},
{
    label: "Habilidades",
    page: "skills"
},
{
    label: "Proyectos",
    page: "projects"
},
{
    label: "Contacto",
    page: "contact"
}

]

//*Codigo de como se hace el hover para los items de la Navbar
// {/* fourth hover effect */}
// <p className="m-16 relative group">
//   <span>Hover over me</span>
//   <span className="absolute left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
// </p>




const NavBar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navBar, setNavBar] = useState(false)
    const Context = createContext(1)
    return (
        <header className=" w-full   mx-auto px-8 bg-blue-500 shadow-md fixed z-50 dark:bg-blue-950">
            <div className='justify-between md:items-center md:flex md:w-full'>
                <div className=''>
                    <div className='flex justify-between py-2'>
                        <div className='md:py-5 md:block'>
                            <h1 className='dark:text-slate-300 text-2x1 font-bold'>Christian Maidana</h1>
                        </div>
                        <div className='md:hidden'>
                            <button onClick={() => setNavBar(!navBar)} >{navBar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>

                <div><div className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navBar ? "block" : "hidden"
                    }`}>
                    <div className='justify-center items-center space-y-1 md:flex md:space-x-3 md:space-y-0'>
                        {NAV_ITEMS.map((item) => {
                            return (
                                <Link
                                    key={item.page}
                                    to={item.page}
                                    className={
                                        "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                                    }
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavBar(!navBar)}
                                >
                                    {item.label}
                                </Link>)
                        })
                        }
                        {
                            currentTheme === "dark" ? (
                                <button onClick={() => { setTheme("light") }} className='bg-slate-100 p-2 rounded-xl '>
                                    <WiDaySunny color="black" />
                                </button>

                            ) : (
                                <button onClick={() => { setTheme("dark") }} className='bg-slate-100 p-2 rounded-xl'>
                                    <WiMoonWaxingCrescent3 color="black" />
                                </button>
                            )
                        }
                    </div>
                </div>
                </div>


            </div>
        </header>
    )
}

export default NavBar
