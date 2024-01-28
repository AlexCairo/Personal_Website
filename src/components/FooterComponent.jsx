import { BsGithub,BsLinkedin,BsTelephoneFill,BsEnvelopeAtFill } from "react-icons/bs";

const contactos = [
    {
        name : "LinkedIn",
        icon : <BsLinkedin />,
        path : "https://www.linkedin.com/in/alexcairo"
    },
    {
        name : "GitHub",
        icon : <BsGithub />,
        path : "https://github.com/AlexCairo"
    },
    {
        name : "alexcairof@gmail.com",
        icon : <BsEnvelopeAtFill />,
        path : "mailto:alexcairof@gmail.com"
    },
    {
        name : "957034285",
        icon : <BsTelephoneFill />,
        path : "tel:957034285"
    }
]

function FooterComponent(){
    return(
        <footer className="footer">
            <div className="container_contactos">
                <ul>
                    {contactos.map( (item,index) => (
                        <li key={index}>
                            <a target="_blank" rel="noreferrer" href={item.path}><i className="contacto_icon">{item.icon}</i> {item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default FooterComponent;