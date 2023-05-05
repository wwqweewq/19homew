import s from './form.module.scss';
import FormItem from './FormItem';

const Form = (props) => {
    let options = props.formElements.map((option, index)=> {
        return (<FormItem 
            reRender={props.reRender} 
            notes={props.notes} 
            {...option}
            titleInputRef={props.titleInputRef}
            textInputRef={props.textInputRef}
            themeSelectRef={props.themeSelectRef}
            />);
    })

    return(
        <form action="" className={s.form}>
            {options}
        </form>
    )
};

export default Form;