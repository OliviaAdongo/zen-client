import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div className='signup'>
        <form>
          <label>Username: </label> <br/>
          <input type="text" className='name' id="formGroupExampleInput" placeholder="Enter username"/><br/>
          <label>Password: </label><br/>
          <input type="password" className='name' id="formGroupExampleInput" placeholder="Enter password"/><br/>
          <button type="submit" class="btn btn-primary">Submit</button><br/>
        </form>
    </div>    
  )
}

export default Signup