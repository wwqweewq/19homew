const menuItem = (props) => {
    return(
        <li className={`${props.class}_item`}>
            <a href="#" className={`${props.class}_link`}>{props.textForA}</a>
        </li>
    )
};

export default menuItem;