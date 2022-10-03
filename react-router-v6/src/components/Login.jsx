import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ User, setUser }) => {
    const navigate = useNavigate();

    const [Email, setEmail] = useState([]);
    const [Password, setPassword] = useState([]);


    const addUser = (user, passwd) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const myProfile = ({
            id: id,
            email: user,
            password: passwd
        })
        const Nprofile = [...User, myProfile];
        setUser(Nprofile);


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!Email || !Password) return;
        addUser(Email, Password);
        setEmail("");
        setPassword("");
        navigate('/register');
    }
    return (
        <>

            <div className="container">
                <h1>PLease Login</h1>
                <form className='submit' onSubmit={(e) => handleSubmit(e)} >
                    <div className="form-control">
                        <label className="label"><span> Email:</span></label>
                        <input className="input"
                            value={Email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="Email"
                            required placeholder='Enter your Email' />

                    </div>
                    <div className="form-control">
                        <label className="label"><span> Password:</span></label>
                        <input className="input"
                            type="password"
                            value={Password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                            placeholder='Enter your Password' />

                    </div>
                    <button className="btn" onClick={() => {
                    }}
                    >Login
                    </button>


                    <p className="text">Don't Have an account ?
                        <Link to="/register"> Register</Link></p>
                </form>

            </div>



        </>
    )
}

export default Login;