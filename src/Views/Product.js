import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../component/Loader'

function Product() {
    const {id} = useParams()

    const url = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })
    let content = null
    
    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then(response => {
            setProduct({
                loading: false,
                data: response.data,
            })
        })
        .catch(() => {
            setProduct({
                loading: false,
                data: null,
                error:true
            })
        })
    }, [url])

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
        <div className="margin-r-30 pl-10">
            <div className="text-xl font-bold w-60 h-60 mb-2">
                {product.data.category}
            </div>
            <h1 className="font-bold text-xl mb-3">
                {product.data.title}
            </h1>
            <div>
                <img 
                    className="h-40 w-40 rounded"
                    src={product.data.image}
                    alt={product.data.title}
                />
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