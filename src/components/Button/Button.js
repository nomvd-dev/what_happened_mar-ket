import styled from 'styled-components';

export const Button = styled.button`
    border: 2px solid #000;
    background: transparent;
    padding: 15px 30px;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: #000;
    font-size: 20px;
    font-weight: 800;
    &:hover{
        color: #fff;
        background: #000;
    }
    /* @media screen and (max-width: 480px){
        margin-top: 80px;
        margin-bottom: 100px;
    } */
    @media screen and (max-width: 414px){
        font-size: 14px;
        padding: 10px 20px;
    }
    @media screen and (max-width: 375px){
        font-size: 10px;
    }
`