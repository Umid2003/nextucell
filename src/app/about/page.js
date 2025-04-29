import Image from 'next/image';
import React from 'react'
// import Img from 'https://cloudmatetechnologies.com/wp-content/uploads/2024/06/react.js.png'
export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className='h-[80vh]'>
      <h1 className='text-5xl'>About Section</h1>
          {/* <Image src={Img} alt="" srcset="" /> */}
    </div>
  )
}

export default About
