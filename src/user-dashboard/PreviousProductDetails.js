import React from 'react'
import { useState, useEffect } from 'react'

export default function PreviousProductDetails() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        const response = await fetch(`https://fakerapi.it/api/v1/products?_quantity=3&_taxes=1&_categories_type=uuid`)
        const result = await response.json()
        // const array = result.data
        console.log('product', result.data)
        setProduct(result.data)
    }

  return (
    <>
    
    <h1 className='content-heading'>Previous Product Details</h1>
    <div className='product-details-container'>
        
        {product.map((item) => (
            <div className='product-details-wrapper'>
                <div className='product-details-content'>
                    <div className='product-image-container'>
                        <img src={item.image} key={item.id} className='product-image'/>
                    </div>
                    <div className='product-info'>
                        <span style={{padding: 10, fontSize: 16}}>{item.name}</span>
                        <b style={{padding: 10, fontSize: 16}}>${item.price}</b>   
                    </div>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

{/* <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>{item.net_price}</div>
                    <div>{item.upc}</div> */}