import projectPokemon from "../../../public/hq720.jpg"
import Image from "next/image";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { DiGithubBadge } from "react-icons/di";

function ProjectsSection() {



    const projectsFake: any = [
        {
            image: "https://imgur.com/fg1d5bq",
            name: "Profinder",
            technologies: [{
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            ],
            deploy: "https://profinder-client.vercel.app/",
            github: "https://github.com/johpaz/Profinder/tree/master",
            info: "Diseño de aplicación web orientada a citas de usuarios clientes y profesionales, como profesional podrá crear publicaciones de sus trabajos y el cliente podrá ordenar, buscar y ver a los mejores profesionales puntuados en la app. En el lado del cliente se utilizaron las tecnologías de React, Redux, Zustand, Chakra UI, y del servidor Express, NodeJs, PostgreSQL y como ORM Sequelize."
        },
        {
            image: projectPokemon,
            name: "Pokeapp",
            technologies: [{
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
            },],
            deploy: "https://vercelApp.com",
            github: "Christian 5262",
        }
    ]

    


    return (
        <section id="projects" className="min-h-screen bg-blue-800 w-screen" >
            <div className="text-center">Proyectos</div>
            <div className="m-0 p-8 flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-4 md:place-items-center">
                {projectsFake.map((project: any, index: any) => {
                    return (
                        <div className="p-4 h-3/4 bg-black  overflow-hidden flex flex-col" key={index}>
                            <Image unoptimized loader={(width) => project.image} className="flex " src={project.image} alt={project.name} width={400} height={400} />
                            <div className="absolute rounded-full "><BsFillRocketTakeoffFill /></div>
                            <div className="absolute rounded-full"><DiGithubBadge /></div>
                            <h3 className="absolute text-center">{project.name}</h3>
                            {
                                project.technologies.map((techs: any, index: number) => {
                                    return (
                                        <div key={index} className="relative flex flex-wrap">
                                            <Image width={20} height={20} loader={() => techs.image} key={index} src={techs.image} alt="imagen techs" />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default ProjectsSection;