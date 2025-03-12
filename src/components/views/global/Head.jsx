import React from 'react'
import css from "../../../styles/styles"


const { HeaderContainer, HeaderCSS } = css

const Head = () => {
    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
            </HeaderContainer>
        </React.Fragment>        
    )
}

export default Head
