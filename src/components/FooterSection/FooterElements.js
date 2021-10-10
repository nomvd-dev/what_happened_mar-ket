import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    padding: 0 80px;
    @media screen and (max-width: 414px){
        padding: 50px 20px;
    }
`

export const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 50px 0;
    border-top: 2px solid var(--quaternary-color);
    @media screen and (max-width: 414px){
        flex-direction: column;
        padding-bottom: 0;
    }
`

export const FooterTopLeft = styled.div`
    @media screen and (max-width: 414px){
        width: 100%;
        .top__left{
            width: 100%;
        }
    }
`

export const FooterTopRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 45%;
    @media screen and (max-width: 414px){
        flex-wrap: wrap;
        width: 100%;
    }
`

export const FooterTopContent = styled.div`
    @media screen and (max-width: 414px){
        width: 50%;
        margin-bottom: 50px;
    }
`

export const FooterTopH = styled.h4`
    font-size: 14px;
    font-weight: 800;
    color: var(--septenary-color);
`

export const FooterTopList = styled.ul`
    list-style-type: none;
    font-size: 14px;
    margin-top: 20px;
    line-height: 1.75;
    color: var(--secondary-color);
`

export const FooterTopItem = styled.li`
    font-family: var(--secondary-font);
    cursor: pointer;
`

export const FooterBottom = styled.div`
    border-top: 2px solid var(--quaternary-color);
    width: 100%;
    display: flex;
    padding-top: 20px;
    padding-bottom: 80px;
    justify-content: space-between;
    @media screen and (max-width: 414px){
        flex-direction: column;
        align-items: center;
        padding-bottom: 0;
    }
`

export const FooterBottomLeft = styled.div`
    font-family: var(--secondary-font);
    color: var(--denary-color);
    width: 50%;
    font-size: 14px;
    @media screen and (max-width: 414px){
        width: 100%;
        align-items: justify;
        line-height: 1.5;
        letter-spacing: 1px;
    }
`

export const FooterBottomRight = styled.div`
    display: flex;  
    @media screen and (max-width: 414px){
        padding-top: 20px;
    }
`

export const FooterBottomImg = styled.img`
    display: block;
    object-fit: contain;
    margin-left: 10px;
`