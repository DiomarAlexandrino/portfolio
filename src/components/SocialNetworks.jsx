
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import '../styles/components/socialNetworks.sass';


const socialNetworks =[
    {name: "linkedin", icon: <FaLinkedinIn />,href:"https://www.linkedin.com/in/diomaralexandrino-97a75631/" },
    {name: "github" , icon: <FaGithub />,href:"https://github.com/DiomarAlexandrino/" } ,
    {name: "instagram" , icon: <FaInstagram />, href:"https://www.instagram.com/diomaralexandrino/" },
];



const SocialNetworks = () => {
    return(
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a
                className="social-btn" id={network.name}key={network.name}href={network.href}>
                    {network.icon}
                    
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks;