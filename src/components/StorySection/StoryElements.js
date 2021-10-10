import styled from "styled-components";

export const StoryContainer = styled.div`
    position: relative;
    width: 100%;
    background: #0565bb;
    padding: 150px 0;
    overflow: hidden;
    /* border-bottom: 2px solid #000; */
`

export const StoryH = styled.h2`
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    color: #fcd32a;
    text-align: center;
    margin-bottom: 40px;
    letter-spacing: 5px;
`
export const StoryP = styled.p`
    font-size: 16px;
    color: #fcd32a;
    text-align: center;
    margin: auto;
    margin-bottom: 80px;
    width: 40%;
`

export const StoryContent = styled.div`
    position: relative;
    width: 65%;
    height: 100%;
    margin: auto;
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
`

export const StoryTitle = styled.h3`
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 800;
`
export const StoryDetail = styled.p`
    font-size: 16px;
    margin: 40px 0;
`

export const StoryDecor = styled.div`
    width: 100%;
    height: 100%;
`
export const StoryDecorImg1 = styled.img`
    position: absolute;
    top: 210px;
    left: 170px;
`
export const StoryDecorImg2 = styled.img`
    position: absolute;
    right: 250px;
    top: 50px;
`
export const StoryDecorImg3 = styled.img`
    position: absolute;
    right: 170px;
    top: 80px;
`
export const StoryDecorImg4 = styled.img`
    position: absolute;
    right: -80px;
    bottom: 300px;
`
export const StoryDecorImg5 = styled.img`
    position: absolute;
    right: -30px;
    bottom: 180px;
`
export const BookDecor = styled.div`
    position: absolute;
    bottom: 180px;
    /* &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background: #000;
        left: 0;
        bottom: 25px;
        z-index: -2;
    } */
`
export const StoryDecorImg6 = styled.img`
`
export const StoryDecorImg7 = styled.img`
`

