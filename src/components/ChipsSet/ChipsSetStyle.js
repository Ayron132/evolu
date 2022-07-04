import styled from "styled-components";




export const OnlineFilter = styled.div`
    margin-top: 20px;
    text-align: center;
    padding: 0px 21px 0px 21px;
    
   
`






export const LabelText = styled.label`
    position: relative;
    color: rgba(73, 69, 79, 1);
    border: 1px solid rgba(73, 69, 79, 1);
    font-size: 12px;
    border-radius: 8px;
    padding: 8px;
    
    align-items: center;
    display: inline-block;
    margin: 5px;
`
export const Button = styled.input.attrs({ type: "radio" })`
    display: none;
    &:checked + ${LabelText}{
        color: rgba(29, 25, 43, 1);
        background-color: rgba(232, 222, 248, 1);
        border-color: rgba(232, 222, 248, 1);
    }
`