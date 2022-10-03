import React from 'react'
import { FaTrash } from "react-icons/fa"

const Register = ({ User, setUser }) => {
    const handleDelete = (id) => {
        const del = User.filter(user => user.id !== id);
        setUser(del)
    }
    return (
        <main>

            {Array.from(User).map((user, index) => {
                return (

                    <>
                        <ul key={index} style={{
                            margin: "0px",
                            listStyle: "none"
                        }}>

                            <li style={{
                                margin: "30px",
                                border: "1px solid black"
                            }}>

                                <h2 style={{ textAlign: "center" }}>
                                    Hello {user.id}
                                </h2>
                                <div>
                                    <h3 style={{ margin: "15px" }}>
                                        Email _{user.email}
                                    </h3>

                                    <h3 style={{ margin: "15px" }}>
                                        Your password is: {user.password}
                                    </h3>
                                    <FaTrash style={{
                                        margin: "0 180px",
                                        fontSize: "25px",
                                    }}
                                        onClick={() => handleDelete(user.id)}
                                    />
                                </div>
                            </li>
                        </ul>
                    </>
                )
            })}

        </main>
    )
}

export default Register;