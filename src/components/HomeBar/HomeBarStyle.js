import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


//NAV USER
export const UserNav = styled.div`
    height: 50px;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

`

export const UserUl = styled.ul`
    padding-left: 21px;
    display: flex;  
    align-items: center;
    list-style: none;
    text-align: center;
    
`

export const UserLi = styled.li`
    height: 20px;
`

export const UserLinks = styled(LinkR)`
    color: rgba(103, 80, 164, 1);
    
    border: none;
    background: transparent;

    font-size: 14px;

    padding: 0px 15px 5px 0px;
    border-bottom: 2px solid rgba(103, 80, 164, 1);

    outline: none;

    position: relative;
    text-decoration: none;

    &::after{
        position: absolute;
        bottom: 0;
        left: 0;

        content: "";
        height: 2px;
        width: 0%;
        
        background-color: rgba(103, 80, 164, 1);
        

        transition: .4s
    }
    &:hover::after, &.active::after{
        width: 100%;
    }


`

