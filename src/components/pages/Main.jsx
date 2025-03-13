import React from "react"
import Head from "../views/global/Head"
import Foot from "../views/global/Foot"
import InputComponent from "../comps/Input"
import css from "../../styles/form"

const { FormContainer, Button } = css

const Main = () => {
    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent placeholder={"Transaction sum"}/>
                <InputComponent placeholder={"Transaction type"}/>
                <InputComponent placeholder={"Enter comment"}/>
                <Button backgroundColor={"#B0F347"}>Save transaction</Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Main
