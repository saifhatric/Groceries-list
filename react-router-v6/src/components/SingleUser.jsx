import React from 'react'
import { Link, useParams } from 'react-router-dom';
import products from "../data"
const SingleUser = () => {
    const { productId } = useParams();
    const data = products.filter(product => product.id === productId);
    console.log(data)
    return (
        <>
            <h2>SingleUser</h2>
            <div>
                <h1>{data.name}</h1>
                <img src={data.image} alt="" />
                <Link to="/users"> back to products</Link>
            </div>
        </>
    )
}

export default SingleUser;