import styled from 'styled-components';

export const Button = styled.button`
    border: 2px solid var(--secondary-color);
    background: transparent;
    padding: 15px 30px;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: var(--secondary-color);
    font-size: 20px;
    font-weight: 800;
    &:hover{
        color: var(--primary-color);
        background: var(--secondary-color);
    }
    @media screen and (max-width: 414px){
        font-size: 14px;
        padding: 10px 20px;
    }
    @media screen and (max-width: 375px){
        font-size: 10px;
    }
`