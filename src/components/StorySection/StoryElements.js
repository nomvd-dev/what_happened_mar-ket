import styled from "styled-components";

export const StoryContainer = styled.div`
    position: relative;
    width: 100%;
    background: #0565bb;
    padding: 150px 0;
    overflow: hidden;
    .story__mobile{
        display: none;
    }
    @media screen and (max-width: 414px){
        padding: 50px 20px;
        padding-bottom: 70px;
        .story__mobile{
            display: block;
        }
    }
`

export const StoryH = styled.h2`
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    color: #fcd32a;
    text-align: center;
    margin-bottom: 40px;
    letter-spacing: 5px;
    @media screen and (max-width: 414px){
        font-size: 25px;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }
`
export const StoryP = styled.p`
    font-family: 'Noto Sans Korean', sans-serif;
    font-size: 16px;
    color: #fcd32a;
    text-align: center;
    margin: auto;
    margin-bottom: 80px;
    width: 40%;
    @media screen and (max-width: 414px){
        font-size: 12px;
        width: 80%;
        margin-bottom: 80px;
        line-height: 1.5;
    }
`

export const StoryContent = styled.div`
    position: relative;
    width: 65%;
    height: 100%;
    margin: auto;
    @media screen and (max-width: 414px){
        display: none;
        width: 100%;
    }
`

export const StoryContentImg = styled.img`
    display: block;
    width: 100%;
    z-index: 20;
`
export const Story = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0, -50%);
    padding: 0 30px;
    text-align: justify;
    /* z-index: 20; */
    @media screen and (max-width: 414px){
        transform: translate(-50%, 0);
        width: 100%;
        padding: 0 20px;
    }
`

export const StoryTitle = styled.h3`
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 800;
    @media screen and (max-width: 414px){
        font-size: 16px;
        padding-top: 10px;
    }
    @media screen and (max-width: 375px){
        font-size: 14px;
        padding-top: 20px;
        text-align: justify;
    }
`
export const StoryDetail = styled.p`
font-family: 'Noto Sans Korean', sans-serif;
    font-size: 16px;
    margin: 40px 0;
    @media screen and (max-width: 414px){
        font-size: 12px;
        margin: 20px 0;
    }
    @media screen and (max-width: 375px){
        font-size: 10px;
        margin: 10px 0;
    }
`

export const StoryDecor = styled.div`
    width: 100%;
    height: 100%;
`
export const StoryDecorImg1 = styled.img`
    position: absolute;
    top: 210px;
    left: 170px;
    @media screen and (max-width: 414px){
        width: 20%;
        top: 200px;
        left: 10px;
    }
    @media screen and (max-width: 375px){
        top: 220px;
    }
`
export const StoryDecorImg2 = styled.img`
    position: absolute;
    right: 250px;
    top: 50px;
    @media screen and (max-width: 414px){
        display: none;
    }
`
export const StoryDecorImg3 = styled.img`
    position: absolute;
    right: 170px;
    top: 80px;
    @media screen and (max-width: 414px){
        width: 20%;
        right: 10px;
        top: 180px;
    }
`
export const StoryDecorImg4 = styled.img`
    position: absolute;
    right: -80px;
    bottom: 300px;
    @media screen and (max-width: 414px){
        width: 40%;
        bottom: 110px;
        right: -20px;
    }
`
export const StoryDecorImg5 = styled.img`
    position: absolute;
    right: -30px;
    bottom: 180px;
    @media screen and (max-width: 414px){
        width: 40%;
        bottom: 50px;
        right: -15px;
        z-index: 20;
    }
`
export const BookDecor = styled.div`
    position: absolute;
    bottom: 180px;
    @media screen and (max-width: 414px){
        left: -15px;
        bottom: 50px;
    }
`
export const StoryDecorImg6 = styled.img`
    @media screen and (max-width: 414px){
        width: 50%;
    }
`
export const StoryDecorImg7 = styled.img`
    @media screen and (max-width: 414px){
        width: 20%;
        display: none;
    }
`

