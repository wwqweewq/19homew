import './formItem.scss';
import React from 'react';

const FormItem = (props) => {
    if(props.htmlType == 'Input'){
        switch(props.inputType){
            case 'password':
                return(
                    <div className="form_item_block">
                        <label htmlFor={props.type}>{props.label}:</label>
                        <input id={props.type} key={`form${props.label}`} type="password"/>
                    </div>
                )

            case 'email':
                return(
                    <div className="form_item_block">
                        <label htmlFor={props.type}>{props.label}:</label>
                        <input id={props.type} key={`form${props.label}`} type="email"/>
                    </div>
                )
                
            default:
                if(props.type == 'title'){
                    return(
                        <div className="form_item_block">
                            <label htmlFor={props.type}>{props.label}:</label>
                            <input id={props.type} key={`form${props.label}`} ref={props.titleInputRef} type="text"/>
                        </div>
                    )  
                }
                else if(props.type == 'text'){
                    return(
                        <div className="form_item_block">
                            <label htmlFor={props.type}>{props.label}:</label>
                            <input id={props.type} key={`form${props.label}`} ref={props.textInputRef} type="text"/>
                        </div>
                    )  
                }
                else {
                    return(
                        <div className="form_item_block">
                            <label htmlFor={props.type}>{props.label}:</label>
                            <input id={props.type} key={`form${props.label}`} type="text"/>
                        </div>
                    )  
                }
                
        }
    }
    else if(props.htmlType == 'Select'){
        let answerOptionsFunction = props.answerOptions.map((option, index) => {
            return <option key={`answer${index}`} value={option.value}>{(option.text)}</option>
        });
        if(props.type == 'theme'){
            return(
                <div className="form_item_block">
                    <label htmlFor={props.type}>{props.label}:</label>
                    <select id={props.type} key={`form${props.label}`} ref={props.themeSelectRef}>
                        {answerOptionsFunction}
                    </select>
                </div>
            )  
        }
        return(
            <div className="form_item_block">
                <label htmlFor={props.type}>{props.label}:</label>
                <select id={props.type} key={`form${props.label}`} >
                    {answerOptionsFunction}
                </select>
            </div>
        )
    }
    
};

export default FormItem;