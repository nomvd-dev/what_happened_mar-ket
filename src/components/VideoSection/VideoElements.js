import styled from "styled-components";

export const VideoContainer = styled.div`
    width: 100%;
    padding: 150px 0;
    padding-bottom: 400px;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
`

export const VideoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VideoH = styled.h2`
    font-size: 50px;
    font-weight: 800;
    letter-spacing: 5px;
    text-align: center;
    text-transform: uppercase;
`

export const VideoP = styled.p`
    font-size: 16px;
    width: 40%;
    letter-spacing: 2px;
    margin: auto;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 60px;
`

export const VideoDecor = styled.div`
`
// Middle Decor: Top -> Bottom
export const VideoContentImg = styled.img`
    display: block;
    width: 90%;
    margin: auto;
    margin-top: 60px;
    z-index: 100;
`
export const VideoDecorImg2 = styled.img`
    position: absolute;
    top: 1300px;
    left: 1130px;
`
// Left Decor: Top -> Bottom
export const VideoDecorImg5 = styled.img`
    position: absolute;
    top: 0;
    left: 210px;
`
export const VideoDecorImg4 = styled.img`
    position: absolute;
    top: 350px;
    left: -335px;
    overflow: hidden;
`
export const VideoDecorImg3 = styled.img`
    position: absolute;
    top: 1200px;
    left: 220px;
    z-index: -1;
`
export const VideoDecorImg1 = styled.img`
    position: absolute;
    top: 1300px;
    left: 350px;
`
// Right Decor: Top -> Bottom
export const VideoDecorImg7 = styled.img`
    position: absolute;
    top: 150px;
    right: 150px;
`
export const VideoDecorImg6 = styled.img`
    position: absolute;
    top: 260px;
    right: 260px;
    z-index: 1;
`
export const VideoDecorImg9 = styled.img`
    position: absolute;
    top: 650px;
    left: 1670px;
    z-index: -2;
    /* overflow: hidden; */
`
export const VideoDecorImg8 = styled.img`
    position: absolute;
    top: 930px;
    left: 1450px;
    z-index: -1;
`