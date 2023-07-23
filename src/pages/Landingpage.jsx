import React, {useState} from 'react';
import Loading from "../components/Loading";
import bg from '../img/bg.jpg';
const [loading, setLoading] = useState(false);



const Landingpage = () => {
 const [value,setValue] = useState("")
const[results, setResults] = useState([])
 const fetchimages = () =>{
  fetch(`https://api.unsplash.com/search/photos?client_id=AGQ_9JkSsDMApyzdLAp68bZYFjKMcmNs5uMFCaAzmQ0&query=${value}`)
.then(res=> res.json())
.then(data=>{
  setResults(data.results)
})


}
if(loading) return <Loading />;
  return (
    <>
      <div className="App pt-20 text-center ">
   
        <div className="mydiv flex justify-center my-10 mx-10% ">
              
          <span className='text-3xl font-bold px-4 bg-slate-400  text-black'>search</span>
          <input className='w-72 p-2 rounded-sm border-none bg-none' type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
       <button className='text-3xl font-bold bg-slate-400 p-2 text-black' onClick={()=>fetchimages()}>GO!</button>
       
        </div>

        <div className="gallery flex flex-wrap justify-around p-2 gap-4 ">
          
          {
            results.map((item)=>{
           
              return( <>
              <div className='flex flex-col '>
              <img className='w-64 h-64' value={item.id} src={item.urls.small} />
              <button className='bg-slate-700 p-2'>Add to favourite</button></div></>
              )
            })
          }  
          
        </div>
      </div>
    </>
  )
}

export default Landingpage
