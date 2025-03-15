import styled from "styled-components"

const css = {
    DataContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 800px;
        height: auto;
        min-height: 60px;
        border-radius: 8px;
        box-shadow: 0px 0px 3px grey;
        margin: 40px auto;
        padding: 20px;
    `,
    ContentLine: styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 100%;
    `,
    ContentCell: styled.span`
        display: block;
        position: relative;
        width: ${props => props.width};
        font-size: 14px;
        text-align: center;
    `,
    ButtonLine: styled.div`
        display: flex;        
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 800px;
        margin: 0 auto;
        margin-top: 40px;
    `,
    ButtonItem: styled.span`
        display: block;
        position: relative;
        font-size: 13px;
        color: gray;
        cursor: pointer;
        margin-left: 40px;
    `
}

export default css
