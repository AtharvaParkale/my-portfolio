import React from 'react'
import './DemoForm.css'

function DemoForm() {
  return (
    <div className='demoForm_container'>
        <div className="demoForm_container_formholder">
            <div className="demoForm_container_formholder_header">
                <h1>Demo Form</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, deleniti!</p>
            </div>
            <div className="demo_form">
                <form >
                    <label>First Name</label>
                    <input type="text" />
                    <label>Last Name</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="email" />
                    <label>Phone number</label>
                    <input type="text" />
                    <button>Send a demo</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default DemoForm