import React from 'react'
import './ContactUs.css'
import Footer from '../Footer/Footer'

function ContactUs() {
    return (
        <>
            <div className='contactUs_container'>
                <div className="contactUs_address">
                    <div className="contactUs_map">
                        1
                    </div>

                    <div className="contactUs_place">
                        <h6>Contact Details</h6>
                        <p>311, Ansal Bhawan
                            16 Kasturba Gandhi Marg
                            New Delhi- 110001</p>
                        <p>Mail us at: info@businus.com</p>
                        <p>We are available from: Monday to Friday, 10 AM to 6 PM</p>
                    </div>

                </div>
                <div className="contactUs_form">
                    <h4>Send Us Message</h4>
                    <form  className='contactUs_form_inputs'>
                        <label >Title : </label>
                        <select name="gender" id="gen">
                            <option value="Ms">Ms</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                        </select>

                        <label >Name:</label>
                        <input type="text" />

                        <label > Name of your company:</label>
                        <input type="text" />

                        <label>Contact No:</label>
                        <input type="text" />

                        <label>Email Address</label>
                        <input type="text" />

                        <label >Your Message</label>
                        <textarea name="message" id="mes" cols="30" rows="10"></textarea>

                        <button>Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs