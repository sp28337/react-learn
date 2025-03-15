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
        background-color: ${props => props.backgroundColor};
        border-radius: 3px;
        height: 30px;
        margin-bottom: 5px;

        &:last-child {
            margin-bottom: 0;
            margin-top: 5px;
        }
    `,
    ContentCell: styled.span`
        display: block;
        position: relative;
        width: ${props => props.width};
        font-size: 14px;
        text-align: center;
        align-content: center;
        border-radius: 3px;
        height: 100%;
        background-color: ${props => props.backgroundColor};
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
    `,
    Hr : styled.hr`
        width: 100%;
        margin: 5px 0;
    `
}

export default css
