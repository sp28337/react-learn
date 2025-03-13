import React from 'react'
import css from "../../styles/form"

const { Input } = css


const InputComponent = (props) => {
    
    const { placeholder, maxLength, action } = props

    return (
        <React.Fragment>
            <Input 
                type="text" 
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={event => {
                    const newValue = event.target.value
                    action(newValue)
                }}
            />

        </React.Fragment>
    )
}

export default InputComponent
