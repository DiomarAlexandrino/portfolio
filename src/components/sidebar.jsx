import Avatar from "../img/eu.jpeg";
import SocialNetworks from "./SocialNetworks";


import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Diomar Alexandrino" />
        <p className="title">Desenvolvedor</p>
        < SocialNetworks />
        < InformationContainer />
      
        <a href= "https://drive.google.com/file/d/1r8DzjSw0J83Nl92cEIehWqNoMeATx6iv/view?usp=sharing" className="btn"> Download Currículo</a>
        

        </aside>;
};

export default Sidebar