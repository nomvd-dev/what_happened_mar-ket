import styled from "styled-components";

export const IssueContainer = styled.div`
    width: 100%;
    background: var(--octonary-color);
    position: relative;
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 414px){
        padding: 50px 20px;
        padding-bottom: 100px;
    }
`

export const IssueH = styled.h2`
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 40px;
    letter-spacing: 5px;
    @media screen and (max-width: 414px){
        font-size: 25px;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }
`

export const IssueP = styled.p`
    font-family: var(--secondary-font);
    width: 40%;
    font-size: 16px;
    text-align: center;
    margin: auto;
    margin-bottom: 60px;
    @media screen and (max-width: 414px){
        font-size: 12px;
        margin-bottom: 40px;
        width: 100%;
    }
`
export const IssueDecor = styled.div``

export const IssueDecorImg1 = styled.img`
    position: absolute;
    right: 70px;
    top: 50px;
    @media screen and (max-width: 414px){
        display: none;
    }
`

export const IssueDecorImg2 = styled.img`
    position: absolute;
    right: 70px;
    top: 170px;
    @media screen and (max-width: 414px){
        display: none;
    }
`
export const IssueDecorImg3 = styled.img`
    position: absolute;
    right: -20px;
    bottom: -90px;
    z-index: 10;
    @media screen and (max-width: 414px){
        width: 30%;
        right: -20px;
        bottom: -20px;
        z-index: 10;
    }
`
export const IssueDecorImg4 = styled.img`
    position: absolute;
    top: -30px;
    left: 20px;
    @media screen and (max-width: 414px){
        width: 30%;
        top: -20px;
        left: 20px;
    }
`
export const IssueDecorImg5 = styled.img`
    position: absolute;
    left: -100px;
    bottom: -50px;
    @media screen and (max-width: 414px){
        width: 30%;
        left: 0;
        bottom: -50px;
    }
`

export const IssueContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    margin-top: 150px;
    .b__brand, .e__brand, .whpn{
        position: relative;
    }
    @media screen and (max-width: 414px){
        grid-template-columns: 100%;
        margin-top: 50px;
    }
`

export const IssueWhpn = styled.div`
    background: var(--nonary-color);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--secondary-color);
    @media screen and (max-width: 414px){
        padding: 30px 0;
        border: 1px solid var(--octonary-color);
    }
`
export const IssueWhpnH = styled.h3`
    text-transform: uppercase;
    color: var(--secondary-color);
    font-size: 55px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 50px;
    vertical-align:middle;
    text-align: center;
`
export const IssueWhpnImg = styled.img`
    display: block;
    @media screen and (max-width: 414px){
        transform: rotate(90deg);
    }
`

export const IssueCard = styled.div`
    background: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    width: 100%;
    @media screen and (max-width: 414px){
        border: 1px solid var(--octonary-color);
    }
`
export const IssueBrandClass = styled.h3`
    text-align: center;
    text-transform: uppercase;
    color: var(--primary-color);
    padding: 30px 0;
    font-size: 32px;
    font-weight: 800;
`
export const IssueBrandImg = styled.img`
    display: block;
    width: 100%;
    height: fit-content;
    object-fit: contain;
`
