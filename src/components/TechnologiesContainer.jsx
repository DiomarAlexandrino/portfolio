

import { DiHtml5, DiJsBadge, DiMysql, DiNodejsSmall, DiReact } from 'react-icons/di';

import '../styles/components/technologiesContainers.sass';

const technologies = [
    {id: "html",  name:"HTML5",      icon: <DiHtml5/>},
    {id: "css",   name:"JavaScript", icon:<DiJsBadge/> },
    {id: "node",  name:"Node.js",    icon: <DiNodejsSmall/>},
    {id: "mysql", name:"MySql",      icon: <DiMysql/>},
    {id: "react", name:"React",      icon: <DiReact/>},
]
const TechnologiesContainer = () => {
    return <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='tecnology-info'>
                        <h3>{tech.name} </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>;
};


export default TechnologiesContainer;