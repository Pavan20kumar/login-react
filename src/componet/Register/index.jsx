import { Fragment } from "react"
import React from "react"
import './Register.css'


import { useState } from "react"
function Register (){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const onRegisterSubmite = (e) => {
        e.preventDefault()

        fetch("https://login-backend-zofi.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name,age, email, password})
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
                setError(data.error)
                
            }else{
                window.location.href = "/login"
            }
        })
        .catch(err => console.log(err))

        if(!name || !email || !password){
            setError("Please fill in all fields")
            return false
        }
        
      
       

        
        
    }
    









    return(
        <Fragment>
            <div className="bg-container">
                <div className="login-container">
                    <div className="login-form-re">
                        <h2>Register</h2>
                        <form onSubmit={onRegisterSubmite}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input type="text" id="age" placeholder="Enter your name" value={age} onChange={(e) => setAge(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn">Register</button>
                            {error && <div className="error text-white">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Register;