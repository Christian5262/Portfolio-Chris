import { DiGithubBadge } from "react-icons/di";
import { GrLinkedin } from "react-icons/gr";
import { ImWhatsapp, ImMail } from "react-icons/im";
import Image from "next/image";

const HomeSection = () => {
    return (
        <section id="home" className="top-72">
            <div className=" flex flex-col text-center items-center justify-center py-16">
                <div className="relative" >
                    <h1>Hola, mi nombre es Christian Maidana y soy desarrollador Full stack </h1>
                    <p>Actualmente, puedo decir que me apasiona todo lo relacionado a tecnologia, cada dia intento aprender nuevas caracteristicas, implementaciones y demas para seguir mejorando constantemente.</p>
                </div>
                <div>
                    <div className="flex flex-wrap gap-8">
                        <div className="rounded-full bg-blue-600 p-3">
                            <DiGithubBadge />
                        </div>
                        <div className="rounded-full bg-blue-600 p-3"><GrLinkedin /></div>
                        <div className="rounded-full bg-blue-600 p-3"><ImWhatsapp /></div>
                        <div className="rounded-full bg-blue-600 p-3"><ImMail /></div>
                    </div>
                </div>
                <div>
                    <h2 className="p-1 bg-zinc-600 rounded-3xl">Descargar Cv</h2>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;