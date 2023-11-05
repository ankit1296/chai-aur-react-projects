import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (  
   <div style={{backgroundColor:color}} className="w-full  h-screen duration-200">
   <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2'>
      <div className='flex flex-wrap  justify-center shadow-lg rounded-lg bg-white'>
         <button onClick={()=>setColor("olive")} style={{backgroundColor: "olive"}} className='rounded-2xl px-5 mr-3 ml-3 mt-2 mb-2 text-white py-2'>Olive</button>
         <button onClick={()=>setColor("red")} style={{backgroundColor: "red"}} className='rounded-2xl px-5 mr-3 ml-3 mt-2 mb-2 text-white py-2'>Red</button>
         <button onClick={()=>setColor("green")} style={{backgroundColor: "green"}} className='rounded-2xl px-5 mr-3 ml-3 mt-2 mb-2 text-white py-2'>Green</button>
         <button onClick={()=>setColor("pink")} style={{backgroundColor: "pink"}} className='rounded-2xl px-5 mr-3 ml-3 mt-2 mb-2 text-white py-2'>Pink</button>
         <button onClick={()=>setColor("blue")} style={{backgroundColor: "blue"}} className='rounded-2xl px-5 mr-3 ml-3 mt-2 mb-2 text-white py-2'>Blue</button>
         <button onClick={()=>setColor("orange")} style={{backgroundColor: "orange"}} className='rounded-2xl px-5 mr-3 ml-3 mt-2 mb-2 text-white py-2'>Orange</button>
         <button onClick={()=>setColor("black")} style={{backgroundColor: "black"}} className='rounded-2xl px-5 mr-3 ml-3 mt-2 mb-2 text-white py-2'>Black</button>
         
      </div>  
    </div>
   </div>
  )
}

export default App
