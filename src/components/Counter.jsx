
import { useState } from 'react'


function Counter() {
    const [Counter,setCounter]=useState(1)
    const[price,setpirce]=useState(100)
    
   function add(){
    if(Counter<=9){
        setCounter(Counter+1);
        setpirce(price+100);
    }
   }
   function Subtract(){
    if(Counter>=2){
        setCounter(Counter-1);
        setpirce(price-100);
    }

   }


  return (
   
    <>
    <div className='d-flex justify-content-center mt-3 ' >
    <button className='btn border border-danger' onClick={Subtract}>-</button>
    <h1>{Counter}</h1>
  
    <button className='btn border border-danger' onClick={add} >+</button>
    
    </div>
    <div className='d-flex justify-content-center mt-2 ' >
    <button className='btn btn-danger text-'>Rs{price}   Add To Bucket </button>
    </div>
    
    </>
  )
}

export default Counter