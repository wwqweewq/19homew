//import стилей
import s from './footer.module.scss';

//import компонентов
import Menu from '../Common/Menu/menu';

//function componet
const Footer = (props) => {
    return(
        <footer>
            <div className='container'>
                <Menu type='footerNavigation' textForA={['About As', 'Contact', 'CR Info', 'Twitter', 'Facebook']} class={s.footer_menu}/>
            </div>
        </footer>
    )
};

export default Footer;