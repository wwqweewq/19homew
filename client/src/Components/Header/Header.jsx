//import стилей
import './header.scss';

//import компонентов
import LogoContainer from './Logo/logo';
import logoImg from '../assets/img/Logo.png';
import Menu from '../Common/Menu/menu';

//function componet
const Header = (props) => {
    return(
        <header>
            <div className="container">
                <LogoContainer imgSrc={logoImg} companyName='Simo'/>
                <Menu type='navigation' textForA={['Discover', 'Join', 'Sign In']} class='navigation_menu'/>
            </div>
        </header>
    )
};

export default Header;