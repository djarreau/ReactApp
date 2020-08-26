import React from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../component/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests.'

function Product() {
    
    const {id} = useParams()

    const url = `https://fakestoreapi.com/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null
    
    if(product.error){
        content = <p>
            Item not found.
        </p>
    }
 
    if(product.loading) {
        content = <div>
            <Loader></Loader>
        </div>
    }

   if(product.data){
       content = 
        <div className=" pl-10">
             <h1 className="font-bold text-xl mb-3 flex items-center justify-center p-3">
                {product.data.title} - ({product.data.category})
            </h1>
            <div>
                <img 
                    className="h-50 w-50 rounded flex items-center justify-center p-3"
                    src={product.data.image}
                    alt={product.data.title}
                />
            </div>
            <div className="text-xl font-boldmb-2">
            </div>
            <div className="text-sm w-50">
                {product.data.description}
            </div>
            <div className="text-sm w-40">
                {product.data.price}
            </div>
        </div>
   }
   
   return (
       <div>
           {content}
       </div>
   )
}

export default Product