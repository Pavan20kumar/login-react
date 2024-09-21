import { Fragment } from "react"
import React from "react"
import './Forget.css'
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"






function Reset (){
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const token = useParams().token
    
    
    
  

    const onForgetSubmite = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`https://login-backend-zofi.onrender.com/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password })
            })

            const data = await response.json()

            if (response.ok) {
                setSuccess(data.message)
                navigate('/login')
            } else {
                setError(data.error)
            }
        } catch (error) {
            console.error('Error:', error)
        }
        

       
       

      


        
     
        

        
    }

   




    return(
        <Fragment>
            <div className='bg-container'>
    <div className="login-container">
      <div className="login-form-fr">
        <h2>Forget  Password</h2>
        <form onSubmit={onForgetSubmite}>
          

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <div className="error text-white">{error.password}</div>}
            {success && <div className="success text-white">{success}</div>}
          </div>

          
              
          
          
          <button type="submit" className="btn">Submite</button>
         
        </form>
      </div>
    </div>
    </div>


        </Fragment>
    )

    
}

export default  Reset;