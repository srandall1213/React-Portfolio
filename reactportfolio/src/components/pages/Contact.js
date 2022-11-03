import React from 'react';

export default function Contact() {
  return (
    <>

      <form className="mt-4 mx-5">

        <div className="form-group my-3">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Mary Poppins"/>
        </div>

        <div className="form-group my-3">
          <label htmlFor="exampleFormControlInput1">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
    
        <div className="form-group mt-3">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Hey Sarah, let's chat." rows="3"></textarea>
        </div>

      </form>

      <button className="btn btn-primary mx-5 my-3">Submit</button>

    </>
  );
}
