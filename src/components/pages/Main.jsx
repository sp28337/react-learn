import React, { useState } from "react"
import Head from "../views/global/Head"
import Foot from "../views/global/Foot"
import InputComponent from "../comps/Input"
import css from "../../styles/form"

const { FormContainer, Button } = css

const Main = () => {

    const [ value, setValue ] = useState()
    const [ type, setType ] = useState()
    const [ comment, setComment ] = useState()

    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent action={setValue} placeholder={"Transaction type"} maxLength={"100"}/>
                <InputComponent action={setType} placeholder={"Transaction sum"} maxLength={"100"}/>
                <InputComponent action={setComment} placeholder={"Enter comment"} maxLength={"100"}/>
                <Button backgroundColor={"#B0F347"}>Save transaction</Button>
            </FormContainer>
            <span>{value}</span><br/>
            <span>{type}</span><br/>
            <span>{comment}</span>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Main
