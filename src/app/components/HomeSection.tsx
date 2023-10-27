import { DiGithubBadge } from "react-icons/di";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { ImWhatsapp, ImMail } from "react-icons/im";
import Image from "next/image";
import { useRef, useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { Cabin } from 'next/font/google'
import style from "./HomeSection.module.css";
import { useState } from "react";
import Link from 'next/link'


const HomeSection = () => {
    const [githubHover, setGithubHover] = useState(false);
    const [linkedInHover, setLinkedInHover] = useState(false);
    const [instagramHover, setInstagramHover] = useState(false);

    const handleMouseEnterGithub = () => {
        setGithubHover(true)
    };
    const handleMouseEnterLinkedIn = () => {
        setLinkedInHover(true)
    };
    const handleMouseEnterInstagram = () => {
        setInstagramHover(true)
    };
    const handleMouseLeaveGithub = () => {
        setGithubHover(false)
    };
    const handleMouseLeaveLinkedIn = () => {
        setLinkedInHover(false)
    };
    const handleMouseLeaveInstagram = () => {
        setInstagramHover(false)
    };


    const titleSplit = useRef(null)

    useEffect(() => {
        let split = new SplitType("h2");


        gsap.from(split.chars, { // <- selector text, scoped to this component!
            opacity: 0,
            y: 100,
            ease: "back",
            duration: 1,
            stagger: 0.1
        });
    }, []);

    const FormSection = {
        before: {
            color: "red"
        }
    }

    // <section id="home" className="h-screen  w-screen bg-gradient-to-r md: h-screen from-blue-900 to-blue-950 bg-no-repeat bg-cover mix-blend-multiply filter bg-opacity-80">
    //         <div className=" flex flex-col lg:relative text-center items-center  md:p-48 md:m-12">
    //             <div className="flex flex-col text-left  md:mx-28 lg:mx-28 top-6 " ></div>

    const backgroundImage = "bg-[url(https://i.imgur.com/MYD02TW.jpg)]"

    return (
        <section id="home" className="min-h-screen  min-w-screen bg-gradient-to-r  from-blue-900 to-blue-950 bg-no-repeat bg-cover mix-blend-multiply filter bg-opacity-80 relative">
            <div className="relative flex flex-col my-1 p-12 top-4 space md:mx-10 md:p-44">
                <div className="flex flex-col text-left items-start justify-start px-8  md:mt-5 mb-0 "  >
                    <div className="text-sm my-2 md:my-0 ">
                        <h1 className="">
                            Hola, mi nombre es
                        </h1>
                    </div>
                    <h2 className="text-emerald-600 font-bold text-5xl  top-2">Christian Maidana</h2>
                    <h2 id="text" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%" }} className="subpixel-antialiased font-bold text-gray-300/100 title-font text-left text-title mb-2 font-cabin text-3xl py-2" ref={titleSplit}>Desarrollador Fullstack</h2>
                    <p className="text-left w-5/6 tracking-tight">Actualmente, puedo decir que me apasiona todo lo relacionado a tecnologia, cada dia intento aprender nuevas caracteristicas, implementaciones y demas para seguir mejorando constantemente.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center md:items-start md:justify-start px-6">
                    <div className="flex gap-8 m-2 md:mt-6">
                        <a className="hola" id="github" target="_blanck" href={"https://github.com/Christian5262"}>
                            <div itemID="github" id="github" className="rounded-full bg-blue-600 transition ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-200 cursor-pointer" onMouseEnter={handleMouseEnterGithub} onMouseLeave={handleMouseLeaveGithub}>
                                {
                                    githubHover ? <DiGithubBadge size={42} color={"black"} /> : <DiGithubBadge size={42} color={"white"} />
                                }
                            </div>
                        </a>
                        <a target="_blanck" href={"https://www.linkedin.com/in/christianmaidana/"}>
                            <div itemID="linkedin" id="linkedin" className="rounded-full bg-blue-600 p-3 rounded-full bg-blue-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-200 cursor-pointer" onMouseEnter={handleMouseEnterLinkedIn} onMouseLeave={handleMouseLeaveLinkedIn}>
                                {linkedInHover ? <GrLinkedin size={20} color={"blue"} /> : <GrLinkedin size={20} color={"white"} />}
                            </div>
                        </a>
                        <a target="_blanck" href={"https://www.instagram.com/christiannmaidana/?hl=es"}>
                            <div itemID="instagram" id="instagram" className="rounded-full bg-blue-600 p-3 rounded-full bg-blue-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-200 cursor-pointer" onMouseEnter={handleMouseEnterInstagram} onMouseLeave={handleMouseLeaveInstagram}>
                                {instagramHover ? <BsInstagram size={20} color={"#e11d74"} /> : <BsInstagram size={20} color="white" />}

                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row m-4 items-center justify-center">
                    <a target="_blanck" href="https://docdro.id/UAmImzW">
                        <button className="group relative h-8 border-solid w-48 overflow-hidden rounded-lg bg-blue-800 text-lg shadow-2xl outline-blue-600 opacity-100 ">
                            <div className="absolute inset-0 w-3 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-black group-hover:text-gray-300/100">Descargar CV</span>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}


export default HomeSection;