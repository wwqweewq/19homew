import MenuItem from './menuItem';
import "./menu.scss";

const Menu = (props) => {
    let texts = props.textForA.map((text, index)=> {
        return <MenuItem key={`${props.type}${index}`} textForA={text} class={props.class}/>
    })
    return(
        <ul className={props.class}>
            {texts}
        </ul>
    )
};

export default Menu;