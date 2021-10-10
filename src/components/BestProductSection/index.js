import React from 'react';
import { BestProductContainer, BestProductH, BestProductP, BestList, BestProductCard, BestProductImg, BestProductRank, BestProductLink, BestProductBtn} from './BestProductElements';

const BestProduct = () => {
    return (
        <>
            <BestProductContainer>
                <BestProductH>Best Product</BestProductH>
                <BestProductP>
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </BestProductP>
                <BestList>
                    <BestProductCard>
                        <BestProductImg src={require('../../img/best-product-1.jpg').default} />
                        <BestProductRank src={require('../../img/producticon-01.png').default} />
                        <BestProductLink>
                            How to create<br /> mobile-optimized
                            <BestProductBtn>GO</BestProductBtn>
                        </BestProductLink>
                    </BestProductCard>
                    <BestProductCard>
                        <BestProductImg src={require('../../img/best-product-2.jpg').default} />
                        <BestProductRank src={require('../../img/producticon-02.png').default} />
                        <BestProductLink>
                            How to create<br /> mobile-optimized
                            <BestProductBtn>GO</BestProductBtn>
                        </BestProductLink>
                    </BestProductCard>
                    <BestProductCard>
                        <BestProductImg src={require('../../img/best-product-3.jpg').default} />
                        <BestProductRank src={require('../../img/producticon-03.png').default} />
                        <BestProductLink>
                            How to create<br /> mobile-optimized
                            <BestProductBtn>GO</BestProductBtn>
                        </BestProductLink>
                    </BestProductCard>
                </BestList>
            </BestProductContainer>
        </>
    )
}

export default BestProduct
