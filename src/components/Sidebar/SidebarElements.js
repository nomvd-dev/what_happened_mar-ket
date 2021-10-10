import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 100%;
    left: 0;
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    color: var(--primary-color);
    z-index: 999;
`
export const CloseIcon = styled.div`
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 24px;
`
export const SidebarMenu = styled.ul`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SidebarItem = styled.li`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    .sidebar__line::after{
        content: '';
        position: absolute;
        height: 1px;
        width: 60%;
        background: var(--primary-color);
        left: 20%;
    }
`
export const SidebarLink = styled.a`

`