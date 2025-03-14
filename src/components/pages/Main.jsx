import React, { useState } from "react"
import Head from "../views/global/Head"
import Foot from "../views/global/Foot"
import InputComponent from "../comps/Input"
import css from "../../styles/form"
import DataList from "../views/local/DataList"

const { FormContainer, Button } = css

const Main = () => {

    const [ value, setValue ] = useState("")
    const [ type, setType ] = useState("")
    const [ comment, setComment ] = useState("")

    const validation = () => {
        if (value.length > 2 && type) {

            console.log("Successful validation")
            setValue("")
            setType("")
            setComment("")

        } else console.log("Failed validation")
    }


    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent inputValue={value} action={setValue} placeholder={"Transaction type"} maxLength={"100"}/>
                <InputComponent inputValue={type} action={setType} placeholder={"Transaction sum"} maxLength={"100"}/>
                <InputComponent inputValue={comment} action={setComment} placeholder={"Enter comment"} maxLength={"100"}/>
                <Button 
                    backgroundColor={
                        value.length < 3 ? "#E5E5E5" : 
                        type ? "#B0F347" : "#E5E5E5"} onClick={validation}>Save transaction</Button>
            </FormContainer>
            <DataList/>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Main