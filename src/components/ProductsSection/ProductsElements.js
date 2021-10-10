import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 150px 160px;
    width: 100%;
    /* margin: 150px 0; */
    @media screen and (max-width: 480px){
        padding: 50px 20px;
        /* margin: 50px 0; */
    }
`
export const ProductsList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 20px;
    @media screen and (max-width: 480px){
        .mobile__hidden__product{
            display: none;
        }
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto auto auto;
    }
`

export const ProductCard = styled.div`
    width: 100%;
    margin-bottom: 50px;
`

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
`

export const ProductH = styled.h4`
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 30px;
    @media screen and (max-width: 480px){
        margin-bottom: 20px;
        font-size: 16px;
    }
`

export const ProductP = styled.div`
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`

export const ProductLike = styled.p`
`