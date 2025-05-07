import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Product() {
    const products = [
        {id: 1, name:'알라두'},
        {id: 2, name:'신밧두'},
        {id: 3, name:'아라비안 나잇두'},
    ];
    
    return(
        <div>
            <h1>제품 목록두</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>

            <Outlet />
        </div>
    )
}

export default Product;