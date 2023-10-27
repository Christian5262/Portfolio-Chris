import Image from "next/image";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";


function ProjectCard(props: any) {
    return (
        <div className="flex flex-col">
            <div className=" mx-5 my-2 gap-5 h-72 relative group " style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                <div className="overlay top-0 left-0 absolute h-full w-full  bg-opacity-0 hidden group-hover:flex bg-gray-950 group-hover:bg-opacity-80 group-hover:flex-wrap  group-hover:text-gray-100 transition-opacity duration-1000">
                    <div className="flex justify-between w-full p-1">
                        <Link className="bg-slate-500 p-1 rounded-full" target="_blank" href={props.deploy}>

                            <BsFillRocketTakeoffFill size={10} />

                        </Link>
                        <Link target="_blank" href={props.github}>
                            <DiGithubBadge size={25} />
                        </Link>
                    </div>
                    <h2 className="flex m-auto">{props.name}</h2>
                    <p className="mx-3  overflow-y-scroll">{props.info}</p>
                    <div className="flex flex-wrap items-center justify-center gap-6  m-auto">
                        {props.technologies.map((tech: any, index: any) => {
                            return (

                                <Image loader={() => tech.image} alt="foto" width={25} height={25} key={index} src={tech.image} />

                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default ProjectCard;