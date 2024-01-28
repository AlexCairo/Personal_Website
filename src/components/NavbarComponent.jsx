import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

const navLinks = [
    {
        sectionName : "Sobre Mi",
        path : "#sobreMi"
    },
    {
        sectionName : "Proyectos",
        path : "#proyectos"
    },
    {
        sectionName : "Habilidades",
        path : "#habilidades"
    },
]

function NavbarComponent({openNav, toggleNav, closeNav}){

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        if(windowWidth >= 900){
            closeNav();
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        }
        
    },[windowWidth, closeNav])

    return(
        <div className="wrapper">
            <nav className={`navbar ${openNav ? 'navbarAnimatedOpen' : 'navbarAnimatedClose'}`} style={{left : openNav ? '0' : '-100%'}}>
                <ul className="navbar_list">
                    {navLinks.map((link, index) => (
                        <li key={index} className="navbar_list_item">
                            <a href = {link.path} onClick={toggleNav} className="navbar_list_item_link">{link.sectionName}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button onClick={toggleNav} className={`wrapper_button ${openNav ? 'open' : 'close'}`}>
                <MdClose className="wrapper_button_icon" />
            </button>
        </div>
    )
}

export default NavbarComponent;