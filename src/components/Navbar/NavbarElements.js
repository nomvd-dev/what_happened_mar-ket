import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #111111;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    color: #ffffff;
`
export const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0 80px;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:480px){
        padding: 0 20px;
    }
`
export const NavHome = styled.a`
    font-size: 26px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;
    @media screen and (max-width:480px){
        font-size: 20px;
    }
`
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width:480px){
        display: block;
        font-size: 24px;
        cursor: pointer;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    width: 40%;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    @media screen and (max-width:1280px){
        width: 50%;
    }
    @media screen and (max-width:480px){
        display: none;
    }
`
export const NavItem = styled.li`
    .navbar__line::after{
        content: '';
        position: absolute;
        height: 30%;
        width: 1px;
        background: #fff;
        top: 35%;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: #ffffff;
`