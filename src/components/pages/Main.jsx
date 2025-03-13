import React from "react"
import Head from "../views/global/Head"
import Foot from "../views/global/Foot"
import InputComponent from "../comps/Input"
import css from "../../styles/form"

const { FormContainer } = css

const Main = () => {
    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer>
                <InputComponent></InputComponent>
                <InputComponent></InputComponent>
                <InputComponent></InputComponent>
            </FormContainer>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Main
