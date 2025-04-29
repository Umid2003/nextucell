import React from 'react'

export const metadata = {
  title: "Register",
};

const Register = () => {
  return (
    <div className='flex h-[80vh] justify-center items-center'>
      <form action="" method="get" className='bg-blue-900 text-white flex flex-col gap-2 p-4 rounded-md items-center'>
        <h2>Register</h2>
              <input type="text" className='p-4 text-white border-2' name="" placeholder='Name' id="" />
              <input type="email" className='p-4 text-white border-2' name="" placeholder='Email' id="" />
        <input type="password" className='p-4 text-white border-2' name="" placeholder='Password' id="" />
        <button type="button" className='bg-green-700 text-white p-2 cursor-pointer'>Register</button>
      </form>
    </div>
  )
}

export default Register
