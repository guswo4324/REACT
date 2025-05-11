import React from 'react';

//구조 분해 할당을 통해  props를 바로 개별변수로 받을 수 있도록 한다

function ProductCard({name, price, discount, isAvailable}) {
    const finalPrice = 
    isAvailable ? price - (price*discount/100): '품절';

    return(
        <div>
            <h3>{name}</h3>
            <p>원가: {price}원</p>
            <p>할인: {discount}%</p>
            <p>최종가격: {finalPrice}원</p>
            <p>{isAvailable ? '구매가능' : '품절'}</p>
        </div>
    )
}

export default ProductCard;