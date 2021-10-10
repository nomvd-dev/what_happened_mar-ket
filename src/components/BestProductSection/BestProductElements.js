import styled from "styled-components";
import bgImage from '../../img/bes-bg.png';

export const BestProductContainer = styled.div`
    background-image: url(${bgImage});
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    width: 100%;
    height: 1080px;
    padding: 0 160px;
    padding-top: 120px;
    @media screen and (max-width: 480px){
        width: 100%;
        height: 100%;
        padding: 50px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const BestProductH = styled.h2`
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    color: #f96400;
    text-align: center;
    letter-spacing: 5px;
    @media screen and (max-width: 480px){
        font-size: 25px;
        letter-spacing: 2px;
    }
`
export const BestProductP = styled.p`
    font-size: 20px;
    color: #f96400;
    width: 45%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 75px;
    text-align: center;
    @media screen and (max-width: 480px){
        width: 100%;
        font-size: 12px;
        line-height: 1.5;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 0;
    }
`
export const BestList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    @media screen and (max-width: 480px){
        height: 100%;
        grid-template-columns: auto;
        grid-template-rows: auto auto auto;
        padding-bottom: 50px;
    }
`
export const BestProductCard = styled.div`
    width: 100%;
    position: relative;
    @media screen and (max-width: 480px){
        width: 100%;
        margin: auto;
        margin-top: 100px;
    }
`
export const BestProductImg = styled.img`
    width: 100%;
    object-fit: contain;
`
export const BestProductRank = styled.img`
    position: absolute;
    left: 0;
    top: -50px;
`
export const BestProductLink = styled.div`
    font-size: 20px;
    font-weight: 800;
    background: #fff;
    width: 70%;
    border: 3px solid #111111;
    padding: 10px;
    display: flex;
    position: absolute;
    bottom: -30px;
    left: 15%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 480px){
        font-size: 16px;
    }
    @media screen and (max-width: 414px){
        font-size: 16px;
        width: 80%;
        left: 10%;
    }
`

export const BestProductBtn = styled.button`
    border: 0 solid #fff;
    color: #fff;
    background: #111;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-weight: 800;
    font-size: 20px;
    cursor: pointer;
    @media screen and (max-width: 480px){
        font-size: 16px;
    }
    @media screen and (max-width: 414px){
        font-size: 16px;
        width: 40px;
        height: 40px;
    }
`