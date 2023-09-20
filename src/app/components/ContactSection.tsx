import { useState } from "react";

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




        return (
            <section id="contact" className="h-screen bg-blue-900 w-screen">
                <div>
                    <h3 className="text-center">¡Si quieres saber más de mi no dudes en contactarme!</h3>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5">
                    <div>
                        <input placeholder="Nombre completo" name="name" type="text" value={input.name} onChange={handleChange} />
                    </div>
                    <div>
                        <input placeholder="Email" type="text" name="email" value={input.email} onChange={handleChange} />
                    </div>
                    <div>
                        <input placeholder="Asunto" type="text" name="affair" value={input.affair} onChange={handleChange} />
                    </div>
                    <div>
                        <textarea placeholder="Mensaje" name="message" value={input.message} onChange={handleChange} />
                    </div>
                    <button className="bg-slate-950 rounded-lg p-2"> Enviar </button>
                </form>
            </section>
        );
    }
}

export default ContactSection;