import styled from "styled-components"

const css = {
    FormContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 600px;
        height: auto;
        min-height: 60px;
        border-radius: 8px;
        box-shadow: 0px 0px 3px grey;
        margin: 40px auto;
        padding: 20px;
    `,
    Input: styled.input`
        display: block;
        position: relative;
        width: 100%;
        height: 40px;
        border: none;
        outline: none;
        background-color: rgb(229, 229, 229);
        padding: 0 0 0 10px;
        border-radius: 8px;
        margin: 0 0 10px 0;
        
        &:last-child {
            margin: 0px;
        }
    `,
}

export default css
