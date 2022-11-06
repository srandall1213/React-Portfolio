import React, { useState } from 'react';
import phone from '../../images/pinkphone.png'
import email from '../../images/pinkemail.png'
import '../../css/style.css';

export default function Contact() {

  //STYLING
  const styles = {
    coloredFont: {
      color: 'hotpink',
    },
    coloredBorder: {
      border: '1px solid hotpink',
      width: '20vw',
      minWidth: '250px'
    },
    errorName: {
      display: 'none',
      color: 'hotpink',
    },
    errorEmail: {
      display: 'none',
      color: 'hotpink',
    }

  };

  //LOGIC
  const [nameInput, setName] = useState('');
  const [emailInput, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    return name === 'nameInput' ? setName(value) : setEmail(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (nameInput === '') { 
      alert("Please enter your name");
    } else if (emailInput === '') {
      alert("Please enter your email");
    } 
    setName('');
    setEmail('');

  };

  return (
    <>
      <div style={styles.coloredBorder} className="mt-4 mx-5 p-3">
        <h3>Message me!</h3>
        <img src= {email} className="smallerIcon mr-3" alt="email icon"/>
        <a className="text-wrap" href="mailto:srandall1213@gmail.com" target="_blank">srandall1213@gmail.com</a>
        <p className="text-wrap"><img src= {phone} className="smallerIcon mr-3" alt="email icon"/>385.502.9822</p>
      </div>

      <form className="mt-4 mx-5">

        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input 
            value={nameInput}
            name="nameInput"
            onChange={handleInputChange}
            type="text" 
            className="form-control" 
            id="formGroupExampleInput" 
            placeholder="Your name here"
          />
          <p className="errorName" style={styles.errorName}>Please enter your name</p>
        </div>
        

        <div className="form-group my-3">
          <label htmlFor="exampleFormControlInput1">Email</label>
          <input 
            value={emailInput}
            name="emailInput"
            onChange={handleInputChange}
            type="email" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"
          />
          <p className="errorEmail" style={styles.errorEmail}>Please enter your email</p>
        </div>
    
        <div className="form-group mt-3">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Hey Sarah, let's chat." rows="3"></textarea>
        </div>

      </form>

      <button type="button" onClick={handleFormSubmit} className="btn btn-outline-dark mx-5 my-3">Submit</button>
      <p className="mx-5" style={styles.coloredFont}>This form is still in development.</p>

    </>
  );
}
