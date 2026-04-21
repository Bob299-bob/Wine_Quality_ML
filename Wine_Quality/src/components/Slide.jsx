import React, { useEffect, useState } from 'react'
import './slide.css'
import { img } from '../assets/slide'
function Slide() {
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setIndex((e)=>(e+1)%img.length);
        },2000);
        return()=>clearInterval(interval);
    },[]);
  return (
    <div className='Container'>
        <div className='Subcontainer'>
            <div>
            <img src={img[index]} alt='wine' width='100%' height='500px'/> 
            </div>
        </div>
    </div>
  )
}

export default Slide