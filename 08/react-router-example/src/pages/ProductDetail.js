import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const {productId} = useParams();

    const product = {
        1: { id: 1, name: '알라두', price: '7'},
        2: { id: 2, name: '신밧두', price: '88'},
        3: { id: 3, name: '아라비안 나잇두', price: '13123'},
    }[productId];

    // const product2 = {
    //     1: { id: 1, name: '알라두', price: '7'},
    //     2: { id: 2, name: '신밧두', price: '88'},
    //     3: { id: 3, name: '아라비안 나잇두', price: '13123'},
    // }.productId;


    return(
        <div>
            <h2>{product.name} 상제정보두</h2>
            <p>가격: {product.price}</p>
        </div>
    )
}

export default ProductDetail;