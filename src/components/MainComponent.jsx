import { FaGithub, FaLinkedin} from "react-icons/fa";
import { TfiMenuAlt  } from "react-icons/tfi";
import { IoMdOpen } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

function MainComponent({openNav, toggleNav}){ 

    const [ activeSection, setActiveSection ] = useState('');
    const sectionRefs = {
        inicio: useRef(null),
        sobreMi: useRef(null),
        proyectos: useRef(null),
        habilidades: useRef(null)
    };

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                setActiveSection(entry.target.id);
            }
        })
    };

    useEffect(() => {
        const observerOptions = {
            rootMargin: '-50% 0% -50% 0%', // Ajusta esto según tu diseño y preferencias
        };

        Object.keys(sectionRefs).map(key => 
            new IntersectionObserver(handleIntersection, observerOptions).observe(sectionRefs[key].current)
        );
    },[]);

    return(
        <main className="main_wrapper" style={{filter : openNav ? 'blur(3px)' : 'none' }}>
            <button className={`button_open_navbar ${openNav ? 'close' : 'open'}`} onClick={toggleNav}>
                <TfiMenuAlt  className="button_open_navbar_icon"/>
            </button>
            <div className="left_menu">
                <nav>
                    <ul>
                        <li><a className={activeSection === "inicio" ? "active" : ""} href="#inicio">Inicio</a></li>
                        <li><a className={activeSection === "sobreMi" ? "active" : ""} href="#sobreMi">Sobre Mi</a></li>
                        <li><a className={activeSection === "proyectos" ? "active" : ""} href="#proyectos">Proyectos</a></li>
                        <li><a className={activeSection === "habilidades" ? "active" : ""} href="#habilidades">Habilidades</a></li>
                    </ul>
                </nav>
            </div>
            <section ref={sectionRefs.inicio} className="main_section" id="inicio">
                <div className="inicio_section_container">
                    <img className="inicio_section_container_profile" src="img/PerfilImg.png" alt="img" />  
                    <p>
                        <span>Hola, Me llamo</span>
                        <strong>
                            <span>Alexander</span> 
                            Cairo
                        </strong>
                        <span>Desarrollador Full-stack</span>
                    </p> 
                    <div className="inicio_section_container_buttons">
                        <a href="CV_AGCF.pdf" download="CV_Alexander_Gabriel_Cairo_Flores">Descargar CV</a>    
                    </div>          
                    <div className="inicio_section_container_contacts">
                        <a href="https://github.com/AlexCairo" target="_blank" rel="noreferrer"  className="inicio_section_container_contacts_item"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/alexcairo/" target="_blank" rel="noreferrer"  className="inicio_section_container_contacts_item"><FaLinkedin /></a>
                    </div> 
                </div>
            </section>
            <section ref={sectionRefs.sobreMi} className="main_section" id="sobreMi">
                <div className="main_section_title">
                    <h5>Conoce un poco más</h5>
                    <h2>Sobre <span>Mi</span></h2>
                </div>
                <div className="sobreMi_section_container">
                    <img className="sobreMi_section_container_picture" src="img/PerfilImg.png" alt="img" />            
                    <article className="sobreMi_section_container_details_experience">
                        <h3>Experiencia</h3>                         
                        <ul className="experience_list">
                           <li className="experience_list_item">
                                <strong>Desarrollo web</strong>
                                <p>
                                    <em>feb.2023 - mar.2023</em>                                  
                                    <span>Diseñé y desarrollé una landing page para el Centro de Inspección Técnica Vehicular JP S.A.C, el cuál ayudará
                                        a las personas interesadas a saber más sobre la empresa y ponerse en contacto con ellos mediante un formulario.</span>                                    
                                </p>
                            </li>
                           <li className="experience_list_item">
                                <strong>Desarrollo web</strong>
                                <p>
                                    <em>mar.2023 - mar.2023</em>                                   
                                    <span>Diseñé y desarrollé una landing page para el Centro de Inspección Técnica Vehicular IVETEC PERU S.A.C, los cuáles solicitaron
                                        el poder modificar la data que se muestra en la página, para ello les brindé un manual de usuario donde se detalla los pasos para la edición
                                        de la información manejada a través de un archivo JSON. </span>                            
                                </p>
                            </li> 
                        </ul>                           
                    </article>
                    <article className="sobreMi_section_container_details_education">
                        <h3>Educación</h3>
                        <ul className="education_list">
                            <li className="education_list_item">
                                <strong>Ingeniería en Informática y Sistemas</strong>
                                <p>
                                    <em>mar.2020 - Actual</em>
                                    <span>Estoy emocionado porque estoy en el octavo ciclo de mi carrera en la Universidad Jorge Basadre Grohmann. Cada día es una aventura nueva llena de aprendizaje y desafíos que me acercan a mis metas</span>                                        
                                </p>
                            </li>
                            <li className="education_list_item">
                                <strong>Desarrollo Full-stack MERN</strong>
                                <p>
                                    <em>jul.2022 - nov.2022</em>
                                    <span>Tecsup me ayudó a ampliar mis conocimientos mediante el curso de desarrollo web, pude entender la estructura de una página, por lo que me resultó
                                        mas sencillo el aprender lo que me deparaba; aprendí varias herramientas clave como JWT, uso de Git, la creación de una API usando express,
                                        para luego guardar la información en la base de datos hecha en MongoDb.</span>                                        
                                </p>
                            </li>
                        </ul>
                    </article>   
                </div>
            </section>
            <section ref={sectionRefs.proyectos} className="main_section" id="proyectos">
                <div className="main_section_title">
                    <h5>Navega entre</h5>
                    <h2><span>Mis</span> Proyectos</h2>
                </div>
                <div className="projects_container">
                    <div className="project">
                        <h5>Landing page IVETEC PERÚ S.A.C</h5>
                        <img src="img/IVETEC-project.jpg" alt="página web Ivetec"/>
                        <ul className="project_technologies">
                            <li>React</li>
                            <li>CSS</li>
                        </ul>
                        <p>
                        Landing page que brinda toda la información acerca de la empresa al cliente que desea tener los mejores servicios para su vehículo, en él 
                            encontraran los horarios de trabajo, un formulario de contacto con la empresa para consulta personalizadas.
                        </p>
                        <div className="project_buttons">
                            <a rel="noreferrer" href="https://github.com/AlexCairo/JPSAC-web-app/tree/gh-pages" target="_blank" className="project_button_github"><FaGithub /></a>
                            <a rel="noreferrer" href="https://citvjpsac.com/" target="_blank" className="project_button_demo"><IoMdOpen /></a>
                        </div>   
                        <div className="top_left"></div>
                        <div className="top_right"></div>
                        <div className="bottom_left"></div>
                        <div className="bottom_right"></div>
                    </div>
                    <div className="project">
                        <h5>Landing page JP S.A.C</h5>
                        <img src="img/JPSAC-project.png" alt="página web JP SAC"/>
                        <ul className="project_technologies">
                            <li>React</li>
                            <li>CSS</li>
                        </ul>
                        <p>Landing page que brinda toda la información acerca de la empresa al cliente que desea tener los mejores servicios para su vehículo, en él 
                            encontraran los horarios de trabajo, un formulario de contacto con la empresa para consulta personalizadas.
                        </p>
                        <div className="project_buttons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/AlexCairo/Ivetec-web-app/tree/gh-pages" className="project_button_github"><FaGithub /></a>
                            <a rel="noreferrer" href="https://ivetec-peru.com/" target="_blank" className="project_button_demo"><IoMdOpen /></a>
                        </div>
                        <div className="top_left"></div>
                        <div className="top_right"></div>
                        <div className="bottom_left"></div>
                        <div className="bottom_right"></div>
                    </div>
                    <div className="project">
                        <h5>E-commerce CYBER</h5>
                        <img src="img/e-commerce-project.png" alt="página de e-commerce"/>
                        <ul className="project_technologies">
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>CSS</li>
                        </ul>
                        <p>
                            E-commerce desarrollado en React con API en Express, Axios para consumir datos desde MongoDB almacenados en MongoAtlas. 
                            Autenticación de usuarios mediante JWT, filtros de productos, carrito de compras y pasarela de pago integrada con la API de PayPal.
                        </p>
                        <div className="project_buttons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/AlexCairo/Shop-app/tree/master" className="project_button_github"><FaGithub /></a>
                            <a rel="noreferrer" href="https://alex-e-commerce.netlify.app/" target="_blank" className="project_button_demo"><IoMdOpen /></a>
                        </div>
                        <div className="top_left"></div>
                        <div className="top_right"></div>
                        <div className="bottom_left"></div>
                        <div className="bottom_right"></div>
                    </div>
                </div>
            </section>
            <section ref={sectionRefs.habilidades} className="main_section" id="habilidades">
                <div className="main_section_title">
                    <h5>Explora entre</h5>
                    <h2><span>Mis</span> Habilidades</h2>
                </div>
                <ul className="skills_container">
                    <li><img src="img/MONGODB.png" alt="MONGODB logo"/></li>
                    <li><img src="img/TAILWIND.png" alt="TAILWIND logo"/></li>
                    <li><img src="img/GITHUB.png" alt="GITHUB logo"/></li>
                    <li><img src="img/EXPRESS.png" alt="EXPRESS logo"/></li>
                    <li><img src="img/JAVASCRIPT.png" alt="JAVASCRIPT logo"/></li>
                    <li><img src="img/GIT.png" alt="GIT logo"/></li>
                    <li><img src="img/REACT.png" alt="REACT logo"/></li>
                    <li><img src="img/CSS.png" alt="CSS logo"/></li>
                    <li><img src="img/HTML.png" alt="HTML logo"/></li>                    
                    <li><img src="img/NODE.png" alt="NODE logo"/></li>
                    <li><img src="img/AXIOS.png" alt="AXIOS logo"/></li>
                    <li><img src="img/JWT.png" alt="JWT logo"/></li>
                </ul>
                
            </section>
        </main>
    )
}

export default MainComponent;