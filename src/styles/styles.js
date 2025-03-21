import styled from "styled-components"

const css = {

    HeaderContainer: styled.header`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #202634;
        padding: 0 30px;
    `,
    FooterContainer: styled.footer`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 80px;
        background-color: #E5E5E5;
    `,
    HeaderCSS: {
        Logo: styled.div`
            font-size: 30px;
            color: #B0F347;
        `,
        MenuContainer: styled.div`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            position: relative;
        `
    },
    UrlContainer: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 100%;
        height: 30px;
        background-color:rgb(255, 255, 255);
        padding: 0 30px;
    `
}

export default css
