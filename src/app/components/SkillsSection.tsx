import Image from "next/image";

function SkillsSection() {

    const skills = [
        { skill: "HTML", image: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" },
        { skill: "CSS", image: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" },
        { skill: "Javascript", image: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" },
        { skill: "React", image: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" },
        { skill: "Next", image: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704" },
        { skill: "Redux", image: "https://user-images.githubusercontent.com/25181517/187896150-cc1dcb12-d490-445c-8e4d-1275cd2388d6.png" },
        { skill: "Express", image: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" },
        { skill: "PostgreSQL", image: "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" },
        { skill: "TypeScript", image: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" },
        { skill: "Git", image: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" },
        { skill: "Node", image: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" },

    ]


    return (
        <section id="skills" className="bg-blue-900 h-screen w-screen">
            <div className="text-center">Habilidades</div>
            <div className="grid grid-cols-4 gap-4 place-items-center" >
                {skills.map((item, index) => {
                    return (
                        <div key={index} className="bg-blue-950 p-8 m-2 rounded-full " >
                            <Image loader={() => item.image} src={item.image} alt="foto" width={80} height={80} className="justify-center" />
                            <h3 className="text-center">{item.skill}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default SkillsSection;