

import { DiHtml5, DiJava, DiJsBadge, DiMysql, DiNodejsSmall, DiReact } from 'react-icons/di';

import '../styles/components/technologiesContainers.sass';

const technologies = [
    {id: "html",  name:"HTML5",      desc: "conhecimento avançado em html5" ,   icon: <DiHtml5/>},
    {id: "css",   name:"JavaScript", desc: "conhecimento avançado em JS" ,  icon:<DiJsBadge/> },
    {id: "node",  name:"Node.js",    desc: "conhecimento Intermediário em Node" ,  icon: <DiNodejsSmall/>},
    {id: "mysql", name:"MySql",      desc: "conhecimento Intermediário em MySql" ,   icon: <DiMysql/>},
    {id: "react", name:"React",      desc: "conhecimento Intermediário em React" ,  icon: <DiReact/>},
    {id: "java", name:"Java",      desc: "conhecimento Intermediário em Java" ,  icon: <DiJava/>},
]
const TechnologiesContainer = () => {
    return <section className='technologies-container' id='technologies-container'>
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                 
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className='tecnology-info'>
                        <h3>{tech.name} </h3>
                             <p>
                           {tech.desc}
                            </p>
                        
                    </div>
                </div>
            ))}
        </div>
    </section>;
};


export default TechnologiesContainer;