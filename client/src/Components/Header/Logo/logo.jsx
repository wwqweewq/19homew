import s from "./logo.module.scss";

const Logo = (props) => {
    return(
        <div className={s.logo_and_name}>
            <img src={props.imgSrc} alt="logo"/>
            <p>{props.companyName}</p>
        </div>
    )
};

export default Logo;