import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const data = useLoaderData();
  const [products , setProducts] = useState([])
  // console.log(data.data);

  useEffect(()=>{
    setProducts(data.data)
  },[data]);

  return (
    <div>
    <Banner/>
    <Products products={products}/>
    </div>
  )
}

export default Home
