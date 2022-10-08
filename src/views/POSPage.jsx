import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import axios from "axios"

function POSPage() {
    
    const[products, setproducts] = useState([]);
    
const fetchProducts = async()=>{
    const result = await axios.get('products');
    setproducts(await result.data);
}

    useEffect(()=>{

    })
  return (
    <Layout>

    </Layout>
  )
}

export default POSPage