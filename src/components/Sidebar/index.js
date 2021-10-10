import React from 'react';
import {SidebarContainer, CloseIcon, SidebarMenu, SidebarItem, SidebarLink} from './SidebarElements';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} >
                <CloseIcon>
                    <FaTimes />
                </CloseIcon>
                <SidebarMenu>
                    <SidebarItem>
                        <SidebarLink>Introduction</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink>Solution</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink>Rate Plan</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink className="sidebar__line"></SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink>Login</SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink>Apply for free use</SidebarLink>
                    </SidebarItem>
                </SidebarMenu>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
