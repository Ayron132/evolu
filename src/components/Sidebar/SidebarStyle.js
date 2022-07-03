import styled from "styled-components"
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
   
`
export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Yeseva One', cursive;
    color: #000;
    letter-spacing: 1px;
    
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;

    & p{
        font-family: 'Alex Brush', cursive;
        font-size: 2rem;
    }
`


export const CloseIcon = styled(FaTimes)`
    color: #000

`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #000
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }

`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

