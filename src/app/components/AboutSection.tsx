import Image from "next/image";
import Photo from "../../../public/1690153547052-removebg-preview (2).png"

function AboutSection() {
    return (
        <section id="about" className="min-h-screen min-w-screen bg-gradient-to-l from-blue-800 to-blue-950">
                <div className=" text-center font-fjalla text-5xl font-extrabold opacity-40 text-yellow-400 mb-3">
                    <h1>Sobre mí</h1>
                </div>
            <div className="flex flex-col  relative m-0 p-9 md:grid md:grid-flow-col ">

                <div className="flex relative  border-8  border-y-emerald-700 border-x-emerald-950 md:w-4/5">
                    <Image src={Photo} alt="My Photo" />
                </div>
                <div className="flex flex-col items-start gap-5 px-8 text-left my-3">
                    <p >
                        🤓 ¡Soy Christian!, me encantan los videojuegos, la música y la tecnología en general. Actualmente, resido en Buenos Aires, Argentina. Desde chico soy muy apasionado por la tecnología y gracias a eso conocí el mundo del desarrollo web en el cual el rol que asumo es el de back-end.
                    </p>
                    <p>
                        💻 Tengo experiencia en la creación aplicaciones web con el <span className="text-beige font-bold">stack de PostgreSQL, Express, Node.js y React, trabajando con metodologías ágiles como SCRUM.</span>
                    </p>
                    <p>
                        El objetivo principal es el desarrollo de aplicaciones donde el usuario tenga una experiencia gratificante,sumando también el buen manejo de datos, brindándole así seguridad al usuario.
                        <span className="text-beige font-bold drop-shadow-2xl"> Siempre dispuesto a adaptarme a diferentes enfoques de trabajo</span> y a proponer ideas innovadoras para lograr una producción óptima.
                    </p>
                    <p>
                        Si quieres saber mas de mí, ¡no dudes en contactarme!
                    </p>
                    <button className="flex flex-wrap items-center justify-center group relative h-8 border-solid w-48 overflow-hidden rounded-lg bg-blue-800 text-lg shadow-2xl outline-blue-600 opacity-100 my-3">
                        <div className="absolute inset-0 w-3 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-gray-300/100">Contactar</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
export default AboutSection
