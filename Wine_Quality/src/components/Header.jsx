import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { wine1, wine2, wine3 } from '../assets/wine/wine'
function Header() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className='flex'>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/form'>Check Wine Quality</Link></div>
            <div
            onMouseEnter={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)} 
            >Wines
              
              {show &&<div className='hide'>
                  <div className='img'><a href='https://www.liquidlibrary.in/OrderOnline?OD1IPVdpbmVz'><img src={wine1} alt='RedWine'/></a></div>
                  <div className='img'><a href='https://fratelliwines.in/'><img src={wine2} alt='CherryWine'/></a></div>
                  <div className='img'><a href='https://brothersbondbourbon.com/'><img src={wine3} alt='ALLSeason'/></a></div>
              </div>}
              </div>   
            <div><Link to='/signup'>Sign up/Log in</Link></div>      
      </div>
    </div>
  )
}

export default Header