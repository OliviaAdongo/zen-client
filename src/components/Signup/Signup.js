import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className='signup'>
   <div className='form'>
        <form class="needs-validation"> 
        <h1>REGISTER</h1>
          <div className='form-group'>
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="input" placeholder="Enter your email"/>
            <div class="invalid-feedback">
                Please enter valid email
            </div>
          </div>
          <div className='form-group'>
            <label for="text" class="form-label">Username:</label>
            <input type="text" class="form-control" id="input" placeholder="Enter your username"/>
  
          </div>
            <div className='form-group'>
              <label for="password" class="form-label">Password:</label>
              <input type="password" class="form-control" id="password"/>
            </div>
            
            <button type="submit" class="btn w-100">Submit</button>
          </form>
   </div> 
  
    </div>
  )
}

export default Signup