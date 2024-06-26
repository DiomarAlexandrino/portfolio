
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

import '../styles/components/informationContainer.sass';

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(44)9861-8894</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>diomar.alexandrino@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Altônia / PR</p>
            </div>
        </div>

</section>;
    
};

export default InformationContainer;