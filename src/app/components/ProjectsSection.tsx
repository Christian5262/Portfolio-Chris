import projectPokemon from "../../../public/hq720.jpg"
import Image from "next/image";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { DiGithubBadge } from "react-icons/di";
import ProfinderApp from "../../../public/Captura de pantalla (8).png"
import { useState } from "react";
import ProjectCard from "../simpleComponents/ProjectCard"

function ProjectsSection() {

    const [isHover, setIsHover] = useState({
        0: false,
        1: false
    })

    const handleMouseEnter = (index: any) => {
        setIsHover({
            ...isHover,
            [index]: true
        })
    }

    const handleMouseLeave = (index: any) => {
        setIsHover({
            ...isHover,
            [index]: false
        })
    }

    const projectsFake: any = [
        {
            image: "https://i.imgur.com/fg1d5bq.png",
            name: "Profinder",
            technologies: [{
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
            },

            ],
            deploy: "https://profinder-client.vercel.app/",
            github: "https://github.com/johpaz/Profinder/tree/master",
            info: "Diseño de aplicación web orientada a citas de usuarios clientes y profesionales, como profesional podrá crear publicaciones de sus trabajos y el cliente podrá ordenar, buscar y ver a los mejores profesionales puntuados en la app. En el lado del cliente se utilizaron las tecnologías de React, Redux, Zustand, Chakra UI, y del servidor Express, NodeJs, PostgreSQL y como ORM Sequelize."
        },
        {
            image: "https://i.imgur.com/fg1d5bq.png",
            name: "Pokeapp",
            technologies: [{
                image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
            },
            {
                image: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
            },

            {
                image: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
            },],
            deploy: "https://vercelApp.com",
            github: "Christian 5262",
            info: "Diseño de aplicación web orientada a citas de usuarios clientes y profesionales, como profesional podrá crear publicaciones de sus trabajos y el cliente podrá ordenar, buscar y ver a los mejores profesionales puntuados en la app. En el lado del cliente se utilizaron las tecnologías de React, Redux, Zustand, Chakra UI, y del servidor Express, NodeJs, PostgreSQL y como ORM Sequelize."
        }
    ]


{/* <blockquote class="imgur-embed-pub" lang="en" data-id="fg1d5bq"><a href="https://imgur.com/fg1d5bq">View post on imgur.com</a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script> */}

    return (
        <section id="projects" className=" min-h-screen  min-w-screen bg-blue-800 " >
            <div className=" h-full w-full">

            </div>
            <h2 className="text-center">Proyectos</h2>
            <div className="">
                {projectsFake.map((project: any, index: number) => {
                    return (
                        <ProjectCard key={index} image={project.image} name={project.name} technologies={project.technologies} deploy={project.deploy} github={project.github} info={project.info}/>
                    )
                })}
            </div>
        </section>
    );
}

export default ProjectsSection;