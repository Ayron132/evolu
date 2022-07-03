import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavLinks, NavItem, MobileIcon, NavMenu } from './NavbarStyle';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        evo<p>luna</p>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars size={20} />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                                about
                            </NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar