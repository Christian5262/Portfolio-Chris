import projectPokemon from "../../../public/hq720.jpg"
import Image from "next/image";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { DiGithubBadge } from "react-icons/di";

function ProjectsSection() {

    const projectsFake = [
        {
            image: projectPokemon,
            name: "Pokeapp",
            technologies: "React, Redux, Express, PostgreSQL, Css3",
            deploy: "https://vercelApp.com",
            github: "Christian 5262",
        },
        {
            image: projectPokemon,
            name: "Pokeapp",
            technologies: "React, Redux, Express, PostgreSQL, Css3",
            deploy: "https://vercelApp.com",
            github: "Christian 5262",
        }
    ]

    return (
        <section id="projects" className="h-screen bg-blue-800 w-screen" >
            <div className="text-center">Proyectos</div>
            <div className="grid grid-cols-2 gap-4 place-items-center">
                {projectsFake.map((project, index) => {
                    return (
                        <div key={index}>
                            <Image src={project.image} alt={project.name} width={500} />
                            <div className="rounded-full "><BsFillRocketTakeoffFill /></div>
                            <div className="rounded-full"><DiGithubBadge /></div>
                            <h3>{project.name}</h3>
                            <h3>{project.technologies}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default ProjectsSection;