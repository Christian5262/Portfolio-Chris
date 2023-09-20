import Image from "next/image";
import Photo from "../../../public/1690153547052-removebg-preview (2).png"

function AboutSection() {
    return (
        <section id="about" className="h-screen bg-blue-800 w-screen ">
            <div className="text-center">
                Sobre mí
            </div>
            <div className="flex flex-row">
                <div className="p-6 m-7">
                    <Image src={Photo} alt="My Photo" width={400} height={400} />
                </div>
                <div>
                    <p>
                        🤓¡Soy Christian!, tengo 21 años de edad y actualmente
                        resido en Buenos Aires, Argentina. Me gusta asumir
                        retos en los cuales pueda aportar todos mis conocimientos y
                        capacidades que adquiri formandome como profesional.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default AboutSection
