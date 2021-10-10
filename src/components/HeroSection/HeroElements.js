import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    height: 100%;
    top: -80px;
`
export const HeroBackground = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media screen and (max-width: 480px){
        width: 100%;
        object-fit: cover;
    }
`
export const IntroBackground = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const IntroImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    @media screen and (max-width: 480px){
        height: 600px;
        object-fit: cover;
    }
`
export const IntroContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    padding-left: 160px;
    color: #ffffff;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 480px){
        padding: 80px 20px;
        align-items: center;
        text-align: justify;
    }
`
export const IntroH = styled.h2`
    font-size: 50px;
    font-weight: 800;
    letter-spacing: 5px;
    text-transform: uppercase;
    /* line-height: 1.2; */
    padding-bottom: 60px;
    @media screen and (max-width: 1280px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 25px;
        padding-bottom: 20px;
    }
`
export const IntroP = styled.p`
    width: 40%;
    font-size: 20px;
    line-height: 1.75;
    @media screen and (max-width: 1280px){
        font-size: 16px;
    }
    @media screen and (max-width: 480px){
        font-size: 12px;
        width: 100%;
    }
`