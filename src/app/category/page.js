"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

// export const metadata = {
//   title: 'Category',
// };
const categories = ['Breakfast', 'Dessert', 'Vegetarian', 'Beef', 'Chicken']
const Category = () => {
  const [category,setCategory]=useState([])
  const [categoryText,setCategoryText]=useState(categories[0])
  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryText}`).then(data => setCategory(data.data.meals)).catch(err => console.log(err))
  }, [category])  
  const selectCategory=(text)=>{
    setCategoryText(text)
  }
  return (
    <div className='min-h-[80vh] flex flex-col gap-4 py-4'>
      <div className='flex justify-around'>
        {categories.map((item, index) => (
          <p onClick={()=>selectCategory(item)} key={index} className={item == categoryText ? 'bg-green-800 text-white cursor-pointer rounded-md p-2 hover:opacity-60 duration-300' : 'bg-red-800 text-white cursor-pointer rounded-md p-2 hover:opacity-60 duration-300'}>{item}</p>
        ))}
      </div>
    
        <div className='grid grid-cols-3 gap-2 w-[90vw] mx-auto my-0'>
          {category.length ? category.slice(0,3).map((item, index) => (
            <div key={index} className='p-2 flex flex-col gap-2 items-center rounded-md border-gray-600 border-2 shadow-amber-300 shadow-lg cursor-pointer hover:shadow-amber-600 duration-300 hover:opacity-80'>
              <img className='w-full rounded-md' src={item.strMealThumb} alt="" srcset="" />
              <h3>{item.strMeal}</h3>
            </div>
          )) : 'Loading'}

        </div>
  
      <div>
        
      </div>
    </div>
  )
}

export default Category
