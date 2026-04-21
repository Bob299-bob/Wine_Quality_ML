import React from 'react'
import Header from './Header'
import Slide from './Slide'
import './Home.css'
function Home() {
  return (
    <div>
        <Header/>
        <Slide/>
        <div className='container'>
          <h2 className='marquee'>"Taste the Future – 
            AI-Powered Wine Quality Insights"</h2>
        </div>
    </div>
    
  )
}

export default Home