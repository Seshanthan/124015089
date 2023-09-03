import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Train = () => {
    const [data, setdata] = useState();
    const [Error, setError] = useState();
    const headers= {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MjI2MDIsImNvbXBhbnlOYW1lIjoiU2VzaGEgUmFpbHdheXMiLCJjbGllbnRJRCI6IjkzZDdhMDg1LTVmYWYtNGY3Yi1iNDkzLThhY2M3N2M3MjBkMSIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMjQwMTUwODkifQ.cCLy9JWRYBxKgWrXc2rEzgZuLbR8SrdGnupm8esShCQ",
"expires_in": "1693722602",
"token_type": "Bearer"
    }
    /*var config={
      header : {"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MTk3MzMsImNvbXBhbnlOYW1lIjoiU2VzaGEgUmFpbHdheXMiLCJjbGllbnRJRCI6IjkzZDdhMDg1LTVmYWYtNGY3Yi1iNDkzLThhY2M3N2M3MjBkMSIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMjQwMTUwODkifQ.ZuVBwsQe5X2czsxYar9fXhScRtzk3cjHKdMPMx-9GBg"
    }axios({
      url: 'http://20.244.56.144:80/train/trains',
      method: 'get',
      headers: {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MTk3MzMsImNvbXBhbnlOYW1lIjoiU2VzaGEgUmFpbHdheXMiLCJjbGllbnRJRCI6IjkzZDdhMDg1LTVmYWYtNGY3Yi1iNDkzLThhY2M3N2M3MjBkMSIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMjQwMTUwODkifQ.ZuVBwsQe5X2czsxYar9fXhScRtzk3cjHKdMPMx-9GBg",
        "expires_in" : "1693719733",
        "token_type" : "Bearer"
      }
       .then(response => {
      console.log(response)
   }) 
   .catch(err => {
      console.log(err);
   });
   })*/
    useEffect(()=>{
        axios.get("http://20.244.56.144:80/train/trains/2344",{headers})
        .then((res)=>setdata(res))
        .catch((error)=>setError(error));
    },[])

    
  
  return (
    <div> {data}</div>
  )
}


export default Train