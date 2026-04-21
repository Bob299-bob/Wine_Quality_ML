import React, { useState } from 'react'
import './signUp.css'
import Header from './Header'
function wineForm() {
  const [Ph,setPh]=useState("")
  const [Fa,setFa]=useState("")
  const [Va,setVa]=useState("")
   const [Ca,setCa]=useState("")
  const [Rs,setRs]=useState("")
  const [Chlo,setChlo]=useState("")
  const [Fsd,setFsd]=useState("")
  const [Tsd,setTsd]=useState("")
  const [Den,setDen]=useState("")
  const [Sul,setSul]=useState("")
  const [Alc,setAlc]=useState("")
  const [result,setResult]=useState("")
  const [showPopup, setShowPopup] = useState(false);
  const handleWine=async(e)=>{
    e.preventDefault();
    const res=await fetch('http://localhost:2000/predict',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        fixed_acidity: Number(Fa),
        volatile_acidity: Number(Va),
        citric_acid: Number(Ca),
        residual_sugar: Number(Rs),
        chlorides: Number(Chlo),
        free_sulfur_dioxide: Number(Fsd),
        total_sulfur_dioxide: Number(Tsd),
        density: Number(Den),
        ph: Number(Ph),
        sulphates: Number(Sul),
        alcohol: Number(Alc)
      })
    })
    const data=await res.json()
    console.log(data)
    console.log('Thankyou for submitting this Information')
    setResult(data.Quality)
    setShowPopup(true);
  }
  return (
    <div>
      <Header/>
      {showPopup && (
              <div className="popup-overlay">
              <div className="popup">
              <h2>Wine Quality: {result}</h2>
              <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
              </div>
            )}
      <form className='sign' onSubmit={handleWine}>
        <div><h1>Fill_Data_For_Wine_Quality</h1></div>
        <label>Fixed Acidity</label>
        <input type='number' value={Fa} onChange={(e)=>setFa(e.target.value)} />
        <label>Volatile Acidity</label>
        <input type='number' value={Va} onChange={(e)=>setVa(e.target.value)} />
        <label>Citric Acid</label>
        <input type='number' value={Ca} onChange={(e)=>setCa(e.target.value)} />
        <label>Residual Sugar</label>
        <input type='number' value={Rs} onChange={(e)=>setRs(e.target.value)} />
        <label>Chlorides</label>
        <input type='number' value={Chlo} onChange={(e)=>setChlo(e.target.value)} />
        <label>Free Sulfur Dioxide</label>
        <input type='number' value={Fsd} onChange={(e)=>setFsd(e.target.value)} />
        <label>Total Sulfur Dioxide</label>
        <input type='number' value={Tsd} onChange={(e)=>setTsd(e.target.value)} />
        <label>Density</label>
        <input type='number' value={Den} onChange={(e)=>setDen(e.target.value)} />
        <label>PH Level</label>
        <input type='number' value={Ph} onChange={(e)=>setPh(e.target.value)} />
        <label>Sulphates</label>
        <input type='number' value={Sul} onChange={(e)=>setSul(e.target.value)} />
        <label>Alcohol</label>
        <input type='number' value={Alc} onChange={(e)=>setAlc(e.target.value)} />
       <div><input type='submit' value='Submit' className='submit'/></div>
      </form>       
    </div>
  )
}

export default wineForm