import React from 'react'
import { useEffect, useState } from "react"
import axios from 'axios'
import Rating from './assets/img/rating.svg'
import CartWhite from './assets/img/cartWhite.svg'
import arrow from './assets/img/arrowBack.svg'
import { useParams,Link } from 'react-router-dom'

export default function Product() {
    const [product, setProduct] = useState(null)
    const [isProductInCart, setIsProductIncart] = useState(false)

    let { productId }= useParams()
    useEffect(() => {
        axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
            .then((res) => {
                setProduct(res.data)
            })
    }, [])
    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину')
        setIsProductIncart(true)
    }
  return (

    <div>
    <div className="arrowBack">
    <Link to={"/"}>
      <img src={arrow} alt="" />
      Back to Best Seller
    </Link>
   </div>
    {
        product === null ? <h2>Loading...</h2>:
    
  
    <div className="product">
    <img src={product.image} alt="" />
    <div className="info">
      <p className="title">{product.title}</p>
      <p className="price">$ {product.price}</p>
      <div className="rating">
        <p>Rating: {product.rating.rate}</p>
        <img src={Rating} alt="" />
      </div>
      <div className="category">
        <span>Category:</span>
        <p>{product.category}</p>
      </div>
      <p className="description">{product.description}</p>
      <button onClick={addProductToCartHandler}>
        <img src={CartWhite} alt="" />
        {isProductInCart ? 'Go to cart' : 'Add to cart'}
      </button>
    </div>
    
  </div>
}
</div>
  )
}
