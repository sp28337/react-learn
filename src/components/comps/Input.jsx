import React from 'react'
import css from "../../styles/form"

const { Input } = css

const InputComponent = () => {
    return (
        <React.Fragment>
            <Input 
                type="text" 
                placeholder="Enter transaction sum" 
                maxLength={"100"}
            />

        </React.Fragment>        
    )
}

export default InputComponent
