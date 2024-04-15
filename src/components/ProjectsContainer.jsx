import Avatar from "../img/editor.jpg";
import "../styles/components/projectsContainer.sass";

const ProjectsContainer = () => {
    return <section className="projects-container" id="projects-container">
        <h2> Projetos</h2>
        <p>Fiz alguns projetos que estão no github,<br>
        </br> alguns como free e alguns para fins didáticos</p>

    <a href="https://6619b9fedc2f1f0e8b68eb36--editordetextorichtext.netlify.app/">
        <div  className="info-card">
            <img src={Avatar} alt="Diomar Alexandrino"/>
	        <h3>Editor de Texto</h3>
            <p>Clique ou veja abaixo o funcionamento do projeto.</p>
        </div>
    </a> 
    <iframe width="640" height="360" src="https://6619b9fedc2f1f0e8b68eb36--editordetextorichtext.netlify.app/"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>
       <h3><i> Projeto em Construção<br>
       </br> em breve mais novidades aqui!</i></h3>
    {/*
     editor com formatação Rich-text  |

        um monitor para ativiades e processos da CPU  |

        um clone do spotify ou apple music  |

        um sistema que consuma uma api   |

        uma pagina de catalogo    |

        um ecommerce    | 
        */} 
    </p>
    </section>
};

export default ProjectsContainer;