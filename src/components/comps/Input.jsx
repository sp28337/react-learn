import React, { useState } from 'react'
import css from "../../styles/form"

const { Input } = css


const InputComponent = (props) => {
    
    const { placeholder, maxLength } = props

    const [inputValue, setInputValue] = useState(0)

    return (
        <React.Fragment>
            <Input 
                type="text" 
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={event => { 
                    const newValue = event.target.value
                    setInputValue(newValue)
                }}
                
            />
            <span>{ inputValue } rub.</span>

        </React.Fragment>
    )
}

export default InputComponent
