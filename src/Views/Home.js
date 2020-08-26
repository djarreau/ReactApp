import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../component/Loader'
import ProductCard from '../component/ProductCard'

function Home() {

    const url = `https://fakestoreapi.com/products`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })
    
    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then(response => {
            setProducts({
                loading: false,
                data: response.data,
            })
        })
        .catch(() => {
            setProducts({
                loading: false,
                data: null,
                error:true
            })
        })
    }, [url])

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