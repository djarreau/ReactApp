import React from 'react'
import Loader from '../component/Loader'
import ProductCard from '../component/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests.'

function Home() {

    const url = `https://fakestoreapi.com/products`
    
    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <div>
            Please try again.
        </div>
    }
 
    if(products.loading) {
        content = <div>
            <Loader></Loader>
        </div>
    }

    if(products.data){
        content = products.data.map((product, key) =>
            <div key={product.id}>
                <ProductCard 
                    product={product} 
                />
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-xl p-3">Products</h1>
            {content}
        </div>
    )
}

export default Home