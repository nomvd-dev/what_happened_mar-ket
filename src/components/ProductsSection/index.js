import {React, useState} from 'react'
import { ProductCard, ProductsContainer, ProductsList, ProductImg, ProductH, ProductP, ProductLike } from './ProductsElements';
import { FaHeart } from 'react-icons/fa';
import { Button } from '../Button/Button';

const ProductsSection = () => {
    const list = [];
    for (var i = 1; i <= 25; i++) {
        list.push(i);
    }

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <ProductsContainer>
                <ProductsList>
                    {
                        list.map((item, index) => {
                            if (item <= 10) {
                                const imageName = require(`../../img/p${item}.png`);
                                return <ProductCard className="mobile__show__product" key={index}>
                                    <ProductImg src={imageName.default} />
                                    <ProductH>[What happen] How to create</ProductH>
                                    <ProductP>
                                        2500 won
                                        <ProductLike>
                                            <FaHeart style={{ color: "#f96400" }} /> 236
                                        </ProductLike>
                                    </ProductP>
                                </ProductCard>
                            }
                            else {
                                // item = item%25;
                                const imageName = require(`../../img/p${item}.png`);
                                return <ProductCard className="mobile__hidden__product" key={index}>
                                    <ProductImg src={imageName.default} />
                                    <ProductH>[What happen] How to create</ProductH>
                                    <ProductP>
                                        2500 won
                                        <ProductLike>
                                            <FaHeart style={{ color: "#f96400" }} /> 236
                                        </ProductLike>
                                    </ProductP>
                                </ProductCard>
                            }
                        })                     
                    }
                </ProductsList>
                <Button style={{marginTop: "80px"}} onClick={handleClick}>See More</Button>
            </ProductsContainer>
        </>
    )
}

export default ProductsSection;
