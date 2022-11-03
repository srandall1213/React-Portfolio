import React from 'react';
import portrait from '../../images/me.png';

export default function About() {
  const imageSize = {
    width: '75%',
  };

  return (
    <div className="container mx-auto m-4">
      <div className='row border'>
        <div className="col-12 col-md-12 col-lg-4 align-self-center text-center my-3">
          <img src={portrait} alt="Sarah Randall" style={imageSize}/>
        </div>
        <div className='col-12 col-md-12 col-lg-8 align-self-center pt-3 pb-0'>
          <p>
          Hello, my name is Sarah Randall. I currently live in Davis County, Utah with my husband and two little kids. I graduated from Utah State University 
          with a bachelor's degree in Marketing in 2014. After that, I worked at the Huntsman Cancer Hospital and loved it there. Helping people made me feel 
          fulfilled in my job. I also got my nail technician license for a creative outlet. My husband got a sales job offer that lead us to Cody, WY and St. George, UT. 
          We are finally back up to Davis County and are happy to be back around family. I have been grateful to be a stay-at-home mom the past several years. 
          </p>
          <p>
          Now that my kids are older, I am entering a new chapter in my life. I am ready to get back to work! I have a good friend who I would code with in junior high, and 
          she decided to take the University of Utah Full-Stack Developer Boot Camp in her 20s. She was and is an inspiration to me as I watch her career grow. The timing 
          hasn't worked out for me to attend the bootcamp until this year. I am almost finished and on-track to get my certificate of completion with an A in the class. I'm excited to
          see what the future holds, and I am eager to continue learning after the boot camp.
          </p>
        </div>
      </div>
    </div>
  );
}
