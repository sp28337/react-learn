import React from "react"
import Head from "../views/global/Head"
import Foot from "../views/global/Foot"
import css from "../../styles/form"

const { FormContainer } = css

const Main = () => {
    return (
        <React.Fragment>
            <Head></Head>
            <FormContainer></FormContainer>
            <Foot></Foot>
        </React.Fragment>        
    )
}

export default Main
