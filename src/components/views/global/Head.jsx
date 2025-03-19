import React from 'react'
import css from "../../../styles/styles"
import { Link } from 'react-router-dom'


const { HeaderContainer, HeaderCSS } = css

const buttonCSS  = {
    display: "block",
    padding: "10px 14px 12px",
    borderRadius: "6px",
    backgroundColor: "#B0F347",
    cursor: "pointer",
    marginLeft: "10px"
}


const Head = () => {

    return (
        <React.Fragment>
            <HeaderContainer>
                <HeaderCSS.Logo>FINMANAGER</HeaderCSS.Logo>
                <HeaderCSS.MenuContainer>
                    <button style={buttonCSS}><Link style={{color: "inherit", textDecoration: "none"}} to="/main">Homepage</Link></button>
                    <button style={buttonCSS}><Link style={{color: "inherit", textDecoration: "none"}} to="/stat/all">Statistic</Link></button>
                    <button style={buttonCSS}><Link style={{color: "inherit", textDecoration: "none"}} to="/plan">Planning</Link></button>
                </HeaderCSS.MenuContainer>
            </HeaderContainer>
        </React.Fragment>        
    )
}

export default Head
