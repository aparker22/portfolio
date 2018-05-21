import React from 'react';

let sendEmail = (e) => {
    e.preventDefault();
    let form = e.target;
    let email = {email: form.email.value, subject: form.subject.value, message: form.message.value};
    form.reset();
    fetch('http://ec2-18-218-173-235.us-east-2.compute.amazonaws.com/email', {
        method: 'POST', 
        body: JSON.stringify(email),
        headers: new Headers({
            'Content-type': 'application/json'
        })
    })
}

let Contact = () => 
    <div className="contact-form">
        <div className="contact-title">
            <h2>Send me a message</h2>
        </div>
        <form onSubmit={sendEmail}>
            <div className="form-section">
                <input type="text" id="name" name="name" placeholder="Name *"></input>
                <input type="text" id="email" name="email" placeholder="Email *"></input>
                <input type="text" id="subject" name="subject" placeholder="Subject *"></input>
            </div>
        <textarea id="message" name="message" placeholder="Message"></textarea>
        <button className="contact-button" type="submit">Let's get in touch!</button>
    </form>
</div>


export default Contact;