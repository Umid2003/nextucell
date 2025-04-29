import React from 'react'

const Forget = () => {
  return (
      <div className='flex h-[80vh] justify-center items-center'>
          <form action="" method="get" className='bg-green-900 text-white flex flex-col gap-2 p-4 rounded-md items-center'>
              <h2>Forget Password</h2>
              <input type="email" className='p-4 text-white border-2' name="" placeholder='Email' id="" />
     
              <button type="button" className='bg-green-700 text-white p-2 cursor-pointer'>Send Email</button>
          </form>
      </div>
  )
}

export default Forget
