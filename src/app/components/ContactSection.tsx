import { useState } from "react";
import { ImWhatsapp, ImMail } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6"

function ContactSection() {


    const [input, setInput] = useState({
        name: "",
        email: "",
        affair: "",
        message: ""
    })
    const handleChange = (event: any) => {
        const value = event.target.value

        setInput({
            ...input,
            [event.target.name]: value
        })
    }

    const handleSubmit = async (event: any) => {
        event?.preventDefault()
        try {
            const response = await fetch("/api/route", {
                method: 'POST',
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(input) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        } catch (error: any) {
            console.log(error);
        }
    }



    return (
        <section id="contact" className="min-h-screen min-w-screen bg-blue-900 w-screen">
            <div className="mb-5">
                <h3 className="text-center ">Contacto</h3>
                <h3 className="text-center ">¡Si quieres saber más de mi no dudes en contactarme!</h3>
            </div>
            <div className="flex flex-col m-4 p-2 gap-5 justify-start items-start">
                <div className="flex flex-wrap items-center justify-center" >
                    <ImMail size={30} className="flex justify-start" />
                    <div className="mx-3">
                        <h4 className="text-lg text-emerald-400 font-bold">¿Tienes alguna pregunta?</h4>
                        <p className="text-beige font-semibold">Mi email es chrisvmai231@gmail.com</p>
                    </div>

                </div>
                <div className="flex flex-wrap items-center justify-center">
                    <FaLocationDot size={30} className="flex justify-start" />
                    <div className="mx-3">
                        <h4 className="text-lg text-emerald-400 font-bold">Mi ubicacion actual</h4>
                        <p className="text-beige font-semibold">Buenos Aires, Argentina</p>
                    </div>

                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex  flex-col justify-center items-center gap-8">
                <div className="">
                    <input className="p-2  hover:border-2  ring-pink-500" placeholder="Nombre completo" name="name" type="text" value={input.name} onChange={handleChange} />
                </div>
                <div>
                    <input className="p-2" placeholder="Email" type="text" name="email" value={input.email} onChange={handleChange} />
                </div>
                <div>
                    <input className="p-2" placeholder="Asunto" type="text" name="affair" value={input.affair} onChange={handleChange} />
                </div>
                <div className="w-96 flex justify-center items-center h-32" >
                    <textarea className="w-full h-full p-2" placeholder="Mensaje" name="message" value={input.message} onChange={handleChange} />
                </div>
                <button className="group relative h-8 border-solid w-48 overflow-hidden rounded-lg bg-blue-800 text-lg shadow-2xl outline-blue-600 opacity-100 ">
                    <div className="absolute inset-0 w-3 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-gray-300/100">Enviar</span>
                </button>
            </form>
        </section>
    )

}

export default ContactSection;