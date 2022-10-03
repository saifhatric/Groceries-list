import React from 'react'
import { Link } from "react-router-dom";
import products from "../data"
const Users = () => {
    return (
        <div>
            {(products).map((product, index) => {
                return (
                    <article key={product.id}>
                        <h5>{index + 1}_{product.name}</h5>
                        <img style={{ width: "80vh" }} src={product.image} />
                        <Link to={`/users/${product.id}`} >
                            more info
                        </Link>
                    </article>
                )
            })}
        </div>
    )
}

export default Users;