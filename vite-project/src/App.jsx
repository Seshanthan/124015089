import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import Trains from './components/Trains';
import Train from './components/Train';

function App() {
  const data= {
    "companyName":"Sesha Railways",
    "clientID": "93d7a085-5faf-4f7b-b493-8acc77c720d1",
    "ownerName":"Seshanthan M",
    "ownerEmail":"124015089@sastra.ac.in",
    "rollNo":"124015089",
    "clientSecret": "kEEROMBVdSRmTpXI"
  }
  /*const register= async ()=>{
    await axios.post("http://20.244.56.144/train/register",data).then((res)=>console.log(res));
  }
  clientID: "93d7a085-5faf-4f7b-b493-8acc77c720d1"
clientSecret: "kEEROMBVdSRmTpXI" 
access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MTk3MzMsImNvbXBhbnlOYW1lIjoiU2VzaGEgUmFpbHdheXMiLCJjbGllbnRJRCI6IjkzZDdhMDg1LTVmYWYtNGY3Yi1iNDkzLThhY2M3N2M3MjBkMSIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMjQwMTUwODkifQ.ZuVBwsQe5X2czsxYar9fXhScRtzk3cjHKdMPMx-9GBg"
expires_in : 1693719733
token_type : "Bearer"
const handlesubmit= async ()=>{
  await axios.post("http://20.244.56.144/train/auth",data).then((res)=>console.log(res));
}<div><button onClick={handlesubmit}></button></div>*/

  return (
    
    <Routes>
    <Route path='/Trains' element={<Trains/>}></Route>
    <Route path='/Train' element={<Train/>}></Route>
    
    
    </Routes>
  )
}

export default App
