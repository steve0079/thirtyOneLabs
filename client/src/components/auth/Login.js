import React, { useState } from 'react'
import './Login.css'
import homeimage from '../../images/NLMLAB1b.jpg'


const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.prevent.default();
        console.log('Login Submit')
    }

    return (
        <div className="login-background">
            <div className="login-form-container">
                <h1>
                    Account <span className="text-primary">Login</span>
                </h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label 
                            htmlFor="email">Email Address
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label 
                            htmlFor="password">Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={onChange}
                        />
                    </div>
                    <input 
                        type="submit" 
                        value="Login" 
                        className="btn btn-primary btn-block"
                    />
                </form>
            </div>
            <img src={homeimage} alt="" />
        </div>
    )
}

export default Login
