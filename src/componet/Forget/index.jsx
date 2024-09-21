import { Fragment } from "react"
import React from "react"
import './Forget.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"






function Forget (){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
  

    const onForgetSubmite = async (e) => {
        e.preventDefault()


        const response = await fetch('https://login-backend-zofi.onrender.com/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
        const data = await response.json()
        if(data.success){
            navigate('/reset-password')
            alert(data.message)
        }else{
            setError(data.message)
        }
        console.log(data) 

        
       
        

        
    }

   




    return(
        <Fragment>
            <div className='bg-container'>
    <div className="login-container">
      <div className="login-form-fr">
        <h2>Forget  Password</h2>
        <form onSubmit={onForgetSubmite}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
            {error && <p className="error-message text-white">{error}</p>}
          </div>

          
              
          
          
          <button type="submit" className="btn">Submite</button>
         
        </form>
      </div>
    </div>
    </div>


        </Fragment>
    )

    
}

export default Forget;