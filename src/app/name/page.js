"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react'
// export const metadata = {
//   title: 'Name',
// };
const Name = () => {
  const [meals,setMeals]=useState([])
  const [search,setSearch]=useState('')

const searchMeals=()=>{
  axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(data => setMeals(data.data.meals)).catch(err => console.log(err))
  setSearch('')
}

  return (
    <div className='min-h-[80vh] flex flex-col gap-2 p-4 items-center'>
      <div className='flex gap-4 w-full justify-center '>
        <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} name="" className='p-4 w-[40%] rounded-md border-2 border-gray-500' placeholder='Search' id="" />
        <button onClick={searchMeals} type="button" className='bg-green-500 text-white p-4 rounded-md cursor-pointer'>Search</button>
    </div>
      <div className='grid grid-cols-3 gap-2 w-[90vw] mx-auto my-0'>
        {meals.length ? meals.slice(0,3).map((item, index) => (
          <div key={index} className='p-2 flex flex-col gap-2 items-center rounded-md border-gray-600 border-2 shadow-amber-300 shadow-lg cursor-pointer hover:shadow-amber-600 duration-300 hover:opacity-80'>
            <img className='w-full rounded-md' src={item.strMealThumb} alt="" srcset="" />
            <h3>{item.strMeal}</h3>
          </div>
        )) : 'Loading'}

      </div>
     
    </div>
  )
}

export default Name
