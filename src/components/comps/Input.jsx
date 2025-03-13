import React from 'react'
import css from "../../styles/form"

const { Input } = css


const InputComponent = (props) => {
    
    const { placeholder, maxLength } = props

    return (
        <React.Fragment>
            <Input 
                type="text" 
                placeholder={placeholder}
                maxLength={maxLength}
            />

        </React.Fragment>
    )
}

export default InputComponent
