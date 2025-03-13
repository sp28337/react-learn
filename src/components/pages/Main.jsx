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
                <InputComponent placeholder={"Transaction type"} maxLength={"20"}/>
                <InputComponent placeholder={"Transaction sum"} maxLength={"10"}/>
                <InputComponent placeholder={"Enter comment"} maxLength={"5"}/>
                <Button backgroundColor={"#B0F347"}>Save transaction</Button>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Main
