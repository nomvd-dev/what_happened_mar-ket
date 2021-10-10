import React from 'react';
import {Nav, NavbarContainer, NavHome, MobileIcon, NavMenu, NavItem, NavLink} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavHome href="#">
                        What happened
                    </NavHome>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>  
                    <NavMenu>
                        <NavItem>
                            <NavLink href="#">Introduction</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Solution</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Rate Plan</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbar__line"></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Apply for free use</NavLink>
                        </NavItem>
                    </NavMenu>  
                </NavbarContainer> 
            </Nav>   
        </>
    )
}

export default Navbar;
