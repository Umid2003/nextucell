// "use client";
// import React, { useState } from 'react'
// import Redux from '../assets/logo.png'
// import Image from 'next/image'

// const Page = () => {
//   const [count,setCount]=useState(0)

//   const changeNumber=(num)=>{
//     num >= 0 ? setCount(num):''
//   }

//   return (
//     <div className='h-[80vh] flex flex-col items-center justify-center gap-4'>
//        {/* <h1 className='bg-red-400 p-4 text-white'>Hello Next JS</h1>
//        <p>Lorem ipsum dolor sit amet.</p>
//        <button className='bg-blue-600 text-white p-2 rounded-md'>Click</button>
//       <Image src={Redux}/> */}
//       <h1>Count: {count}</h1>
//       <div className="btns flex gap-4">
//         <button type="button" onClick={()=>changeNumber(count+1)}>Add</button>
//         <button type="button" onClick={() => changeNumber(count - 1)}>Del</button>
//         <button type="button" onClick={() => changeNumber(0)}>Res</button>
//       </div>
//      </div>
//   )
// }

// export default Page

// 'use client';
// import React, { useState } from 'react'

// const Page = () => {
//   const [text,setText]=useState('')
//   const [textArea,setTextArea]=useState('')

//   const changeText=()=>{
//     // let newText=textArea
//   // newText=textArea.replace('n','н')
//     setText(textArea.toLowerCase().replace('sen','ceн'))
//   }

//   return (
//     <div className='h-[80vh] flex justify-center items-center gap-4 flex-col'>
//       <textarea onChange={(e) => setTextArea(e.target.value)} value={textArea} name="" id="" placeholder='Text...' className='border-2 border-gray-500 p-2 rounded-md w-[70vw] h-[40vh] resize-none'></textarea>
//    <button onClick={changeText} type="button" className='bg-green-600 text-white py-2 rounded-md cursor-pointer px-4'>Change to krill</button>
//    <p className='text-center h-[10vh] flex justify-center items-center'>{text}</p>
//     </div>
//   )
// }

// export default Page
// "use client";
// import axios from "axios";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const page = () => {
//   const [animals, setAnimals] = useState([]);
//   const [search, setSearch] = useState('')


//   useEffect(() => {
//     axios
//       .get(
//         "https://api.api-ninjas.com/v1/animals?x-api-key=fXNA1QELMpyKgetuIVyAgDlr9PUaIkKs0D2BQ8Y6&name=fox"
//       )
//       .then((data) => setAnimals(data.data))
//       .catch((err) => console.log(err));
//   },[]);
  
  
//   const searchAnimal=(text)=>{
//         axios.get(
//           `https://api.api-ninjas.com/v1/animals?x-api-key=fXNA1QELMpyKgetuIVyAgDlr9PUaIkKs0D2BQ8Y6&name=${text}`
//         )
//   .then((data) => setAnimals(data.data))
//   .catch((err) => console.log(err));
//   setSearch('')
//   }
//   return (
//     <>
//        <nav className="h-[10vh] bg-purple-900 text-white flex justify-between px-10 items-center">
//             <h1>Logo</h1>
//             <ul className="max-md:hidden flex gap-20">
//               <li><Link href="/">Home</Link></li>
//               <li><Link href="/about">About</Link></li>
//               <li><Link href="/contact">Contact</Link></li>
//             </ul>
//             <form  >
//             <input type="search" placeholder="Animals ..." value={search} className="p-2 rounded-md border-2 outline-none border-white placeholder:text-white" onChange={(e)=>setSearch(e.target.value)}/>
//                         </form>
//           </nav>
//       <div className="min-h-[80vh] py-4 flex justify-center items-center">
//         <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 w-[95vw]">
//           {animals.length?animals.map((item, index) => (
//             <div className="bg-gray-600 text-white flex flex-col gap-4 rounded-md p-2 items-center">
//               <h3>Title: {item.name}</h3>
//               <h3>Age: {item.characteristics.lifespan}</h3>
//             </div>
//           )):'No result'}
//         </div>
//       </div>
//     </>
   
//   );
// };

// export default page;

"use client" 
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [foods,setFoods]=useState([])
  const [selectedMeal, setSelectedMeal] = useState()
const [showSelectedMeal,setShowSelectedMeal]=useState(false)
  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken').then(data=>setFoods(data.data.meals)).catch(err=>console.log(err))
  },[selectedMeal])  

  const selectedMealById=(id)=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(data => setSelectedMeal(data.data.meals[0])).catch(err => console.log(err))    
    setShowSelectedMeal(true)
  }   
  
  return ( 
    <div className='min-h-[80vh]'>
<div className='grid grid-cols-3 gap-2 w-[90vw] mx-auto my-0'>
        {foods.length ? foods.slice(0,3).map((item, index) => (
          <div onClick={() => selectedMealById(item.idMeal)} className='p-2 rounded-md border-gray-600 border-2 cursor-pointer shadow-amber-600 shadow-lg'>
            <img className='w-full' src={item.strMealThumb} alt="" srcset="" />
            <h3>{item.strMeal}</h3>
          </div>
        )) : 'Loading'}    

</div>
      <div className='absolute h-[80vh] top-[55%] left-[50%] translate-x-[-50%] translate-y-[-55%]'>
        {showSelectedMeal&&selectedMeal ? 
        <div className='flex gap-4 w-[70vw] items-center bg-amber-300 p-4 rounded-xl'>
          <div className='flex flex-1 flex-col gap-4'>
              <h2>Title: {selectedMeal.strMeal}</h2>
              <p>Instruction: {selectedMeal.strInstructions}</p>
          </div>
            <iframe src={`https://www.youtube.com/embed/${selectedMeal.strYoutube.slice(-11)}`} frameborder="0" title={selectedMeal.strMeal} className='flex-1 h-[50vh]'></iframe>
            <span onClick={()=>setShowSelectedMeal(false)} className='absolute top-10 right-10 cursor-pointer text-2xl'>X</span>
        </div>
        :""}
      </div>
    </div>
  )
}

export default page


