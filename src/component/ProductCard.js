import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden w-40 flex p-3">
            {props.product.title}
            {props.product.price}
            <div>
                <Link to={`/product/${props.product.id}`}>
                    <img 
                        className="h-40 w-40 rounded"
                        src={props.product.image}
                        alt={props.product.title}
                    />
                </Link>
            </div>
        </div>
    )
}

export default ProductCard