import styled from "styled-components";
import { BsCheckLg } from 'react-icons/bs'

export const CheckBtn = styled(BsCheckLg)`
    color: #000;
    background-color: rgba(232, 222, 248, 1); 
    margin-right: 10px
`

export const OnlineContainer = styled.div`
    
`

export const Img = styled.img`
    margin-right: 10px;
`

export const OnlineContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    padding: 0px 21px;
    display: flex;
    flex-direction: column;
    
`

export const OnlineH1 = styled.h1`
    font-size: 22px;
`

export const OnlineP = styled.p`
    font-size: 16px;
    
`
export const OnlineFilter = styled.div`
    margin-top: 30px;
    
    padding: 0px 0px;
`



export const Button = styled.input.attrs({ type: "radio" })`
    display: none;
    
`;


export const LabelText = styled.label`
    position: relative;
    color: rgba(73, 69, 79, 1);
    border: 1px solid rgba(73, 69, 79, 1);
    font-size: 12px;
    border-radius: 8px;
    padding: 6px 16px;
    align-items: center;
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    display: inline-block;

    ${Button}:checked + &&{
        color: rgba(29, 25, 43, 1);
        background-color: rgba(232, 222, 248, 1);
        border-color: rgba(232, 222, 248, 1);
    }
    
`

