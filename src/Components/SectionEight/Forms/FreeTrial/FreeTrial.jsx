import React from 'react'
import './FreeTrial.css'

function FreeTrial() {
    return (
        <div className="freeTrialForm_container">
            <div className="freeTrialForm_container_formholder">
                <div className="freeTrialForm_container_formholder_header">
                    <h1>Free Trial Form</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, deleniti!</p>
                </div>
                <div className="freeTrialForm">
                    <form >
                        <label>First Name</label>
                        <input type="text" />
                        <label>Last Name</label>
                        <input type="text" />
                        <label>Email</label>
                        <input type="email" />
                        <label>Phone number</label>
                        <input type="text" />
                        <button>Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FreeTrial