import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from "@emailjs/browser"
import './Contact.css';

const Contact = () => (
  <div className="contact-container">
    <h1 className='contact-head'> Drop Us a Line </h1>
    <div className='contact-required'> Your email address will not be published. Required fields are marked</div>
    <MessageForm/>
  </div>
);


function MessageForm(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  function resetMessage(){
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  const recMailDetails = {
    serviceID : "service_5zzo4t8",
    templateID : "template_ysjpngt",
    options: "35GzDfgHHtQpr_fZB"
  }

  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm(recMailDetails.serviceID, recMailDetails.templateID, form.current, recMailDetails.options).then(
      ()=>{
        alert("Message sent successfully!");
        form.current.reset();
        resetMessage();
      },
      (error) => {
        alert("Failed to send message. Please try again");
      }
      
    )
  }


  return(
    <form ref={form} onSubmit={sendEmail} className = 'contact-form'>
      <ul className = 'contact-details'>
        <li className = 'contact-field'>
          <label className='contact-required'>Name</label>
          <input className='contact-field-input'
          type = 'text' 
          placeholder='Entre your name'
          name='name'
          value = {name}
          onChange={(event) => setName(event.target.value)} />
        </li>
        <li className = 'contact-field'>
          <label className='contact-required'>Email</label>
          <input className='contact-field-input' 
          type = 'email' 
          placeholder='Entre your email address'
          name='email'
          value = {email}
          onChange={(event) => setEmail(event.target.value)} />
        </li>
        <li className = 'contact-field'>
          <label>Subject</label>
          <input className='contact-field-input'
          type = 'text' 
          placeholder='Provide context'
          name='subject'
          value = {subject}
          onChange={(event) => setSubject(event.target.value)} />
        </li>
        <li className = 'contact-field'>
          <label className='contact-required'>Message</label>
          <textarea className='contact-field-input'
            placeholder='Write your message here'
            name='message'
            value={message}
            onChange={(event) => setMessage(event.target.message)}
          />
        </li>
      </ul>
      <input type = "submit" className='contact-send-message' value="Send Message" />
    </form>
  )
}


Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
