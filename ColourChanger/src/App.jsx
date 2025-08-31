import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duratio-200"
   style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"></div>
<div className="fixed bottom-12 left-1/2 -translate-x-1/2 fixed flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow z-50">
  <button
  onClick={() => setColor("red")} 
  className="ouline-none px-4 py-1 rounded-full text-white shadow-lg hover:2xl" 
style={{backgroundColor:"red" }}
  >Red
  </button>
  <button
  onClick={() => setColor("green")}  
  className="ouline-none px-4 py-1 rounded-full text-white shadow-lg hover:2xl" 
style={{backgroundColor:"green" }}
  >Green
  </button>
  <button
   onClick={() => setColor("blue")} 
  className="ouline-none px-4 py-1 rounded-full text-white shadow-lg hover:2xl" 
style={{backgroundColor:"blue" }}
  >Blue
  </button>
  <button 
  onClick={() => setColor("orange")}  
  className="ouline-none px-4 py-1 rounded-full text-white shadow-lg hover:2xl" 
style={{backgroundColor:"orange" }}
  >Orange
  </button>
  <button 
  onClick={() => setColor("black")} 
   className="ouline-none px-4 py-1 rounded-full text-white shadow-lg hover:2xl" 
style={{backgroundColor:"black" }}
  >Black
  </button>
  <button
   onClick={() => setColor("purple")}  
   className="ouline-none px-4 py-1 rounded-full text-white shadow-lg hover:2xl" 
style={{backgroundColor:"purple" }}
  >Purple
  </button>
</div>
  
   

   
   </div>
  )
}

export default App
