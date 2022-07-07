import styled from "styled-components";

import { Link as LinkR } from "react-router-dom"

export const FooterContainer = styled.footer`
    width: 100%;
    min-height: 250px;
    background: rgba(244, 239, 244, 1);
    display: flex;
    items: center;
    text-align: center;
    margin-top: auto;
    
    @media(max-width: 650px){
        flex-direction: column;
    }
    
`

export const FooterBox = styled.div`
    width: 320px;
    padding: 20px 21px 20px 21px;

    @media(max-width: 650px){
        width: 100%;
        text-align: center;
    }
`

export const H1 = styled.h1`
    color: rgba(28, 27, 31, 1);
    margin-bottom: 6.5px;
    font-size: 16px;
    font-weight: normal;

    
`

export const Link = styled(LinkR)`
    text-decoration: none;
    font-size: 14px;
    color: rgba(147, 144, 148, 1);
    margin-top: 7px;
    &:hover{
        color: rgba(33,0,93,1);
    }

`

export const Ul = styled.ul`
    marin: 10px 0px;
    list-style: none;
    display: flex;
    flex-direction: column;
`