import React from 'react'
import Button from '../Button/Button'
import "./Form.css"
const Form = () => {
 
  return (
    <div className='form-bady'>
      <form action="">
        <div className='Name'>

        <input type="text" placeholder='Enter the name' required autoComplete='false'/>
        </div>
        <div className='Email' >

        <input type="text" placeholder='Enter the mail' required autoComplete='false' />
        </div>
        <div className='textArea'>

        <textarea name="Message" placeholder='Enter the message ' required autoComplete='false' rows="10"></textarea>
        </div>
        <div className='Button'>

        <Button name="Send"/>
        </div>
      </form>
    </div>
  )
}

export default Form
