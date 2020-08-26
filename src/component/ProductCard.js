import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className=" rounded overflow-hidden shadow-lg flex items-center justify-center p-3">
            <Link to={`/product/${props.product.id}`}>
                <img 
                    className="w-full overflow-hidden object-contain h-50 flex items-center justify-center"
                    src={props.product.image}
                    alt={props.product.title}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        {props.product.title}
                    </div>
                    <p className="text-gray-700 text-base">
                        {props.product.description}
                    </p>
                </div>
                <div className="font-bold text-xl flex items-center justify-center">
                    ${props.product.price}
                </div>
            </Link> 
        </div>



        // <div className="border ">
        //     <div className="h-50 w-full object-contain p-3 flex items-center justify-center">
        //         <Link to={`/product/${props.product.id}`}>
        //             <img 
        //                 src={props.product.image}
        //                 alt={props.product.title}
        //             />
        //         </Link>
                
        //     </div>
        //     <div className="font-bold w-full text-xl flex items-center justify-center p-3">
        //             {props.product.title}
        //     </div>
        //     <div className="flex items center justify-center">
        //         {props.product.category} 
        //     </div>
            
        /* <div className="  p-3">
            <div>
                <div>
                    {props.product.title}
                </div>
                <div className="text-sm w-50">
                    {props.product.category} 
                    <p>{props.product.description}</p>
                </div>
            {props.product.price}
        </div>
            
        </div> */
    //  </div>
    )
}

export default ProductCard