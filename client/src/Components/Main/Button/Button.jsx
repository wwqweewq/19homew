import './button.scss';

const Button = (props) => {
    return(
        <button onClick={props.onClick} className={props.btnClass}>{props.btnText}</button>
    )
};

export default Button ;