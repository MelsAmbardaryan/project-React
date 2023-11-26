import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function BestSellers() {

const [products,setProducts]=useState([])
const navigate = useNavigate()

useEffect(()=>{
const promise=axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
promise.then((res)=>{
  setProducts(res.data)
})
  
},[])
const showMoreHandler =(id)=>{
 navigate(`/product/${id}`)
}

  return (
    <div className='bestSeller'>
      <h2>BestSellers</h2>
      <div className='cards'>
        {
          products.map((element)=>{
            return (
              <div className="card">
              <img src={element.image} alt="img" />
              <h4>{element.title}</h4>
              <p className="price">${element.price}</p>
              <button onClick={()=>showMoreHandler(element.id)}>Show more</button>
              </div>
            )

          })
        }
      </div>


    </div>
  );
}
