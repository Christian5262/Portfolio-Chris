import { DiGithubBadge } from "react-icons/di";
import { GrLinkedin } from "react-icons/gr";
import { ImWhatsapp, ImMail } from "react-icons/im";
import Image from "next/image";
import { useRef, useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";


const HomeSection = () => {
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



return (
    <section id="home" className="h-screen bg-blue-900 w-screen">
        <div className=" flex flex-wrap relative text-center items-center  p-48">
            <div className="h-full" style={{backgroundImage : 'url("../../../public/desktop-smartphone-app-development_23-2148683810.jpg")'}}></div>
            <div className="flex flex-col" >
                <h1 className="text-4xl">Hola, mi nombre es <span className="text-emerald-600 font-bold text-5xl mt-6">Christian Maidana</span></h1>
                <h2 id="text" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%" }} className="text-2xl" ref={titleSplit}>Desarrollador Fullstack</h2>
                <p>Actualmente, puedo decir que me apasiona todo lo relacionado a tecnologia, cada dia intento aprender nuevas caracteristicas, implementaciones y demas para seguir mejorando constantemente.</p>
            </div>
            <div className="flex flex-wrap s">
                <div className="flex gap-8">
                    <div className="rounded-full bg-blue-600 p-3">
                        <DiGithubBadge />
                    </div>
                    <div className="rounded-full bg-blue-600 p-3"><GrLinkedin /></div>
                    <div className="rounded-full bg-blue-600 p-3"><ImWhatsapp /></div>
                    <div className="rounded-full bg-blue-600 p-3"><ImMail /></div>
                </div>
            </div>
            <div className="flex ">
                <h3 className="p-1 bg-zinc-600 rounded-3xl">Descargar Cv</h3>
            </div>
        </div>
    </section>
);
}

export default HomeSection;