import React, {useState} from 'react';
import './Login.css';
import Loader from '../Loader/Loader';

import Modal from '../components/Modal';


const Landingpage = () => {

  const [isLoading, setLoading] = useState(false);

  const [show, setShow] =useState(false);
const [photo, setPhoto] = useState();
 const [value,setValue] = useState("")
const[results, setResults] = useState([])
 const fetchimages = () =>{
  fetch(`https://api.unsplash.com/search/photos?client_id=AGQ_9JkSsDMApyzdLAp68bZYFjKMcmNs5uMFCaAzmQ0&query=${value}`)
.then(res=> res.json())
.then(data=>{
  setResults(data.results)
  console.log(data.results);

})


}

  return (
    <>
      <div className="App  text-center  ">
   
        <div className="mydiv flex justify-center itms-center p-28 ">
              

          <input className='w-[26rem] p-2 rounded-sm  bg-white/30 shadow-md text-white' type="text" placeholder="Start new search" value={value} onChange={(e)=>setValue(e.target.value)}/>
          {isLoading ? "" :
      ( <button className='text-3xl font-bold bg-white/30 border rounded-sm shadow-md p-2 text-white' onClick={()=>fetchimages()}>GO!</button> )}
      {isLoading ? <Loader /> : ''}
       
        </div>
        <div className="h-16 bg-slate-700 flex justify-between px-8 items-center text-black">
          <div className='bg-slate-400 rounded-sm px-2 py-1 border '>Technology</div>
          <div className='bg-slate-400 rounded-sm px-2 py-1'>Technology</div>
          <div className='bg-slate-400 rounded-sm px-2 py-1'>Technology</div>
          <div className='bg-slate-400 rounded-sm px-2 py-1'>Technology</div>
          <div className='bg-slate-400 rounded-sm px-2 py-1'>Technology</div>
          <div className='bg-slate-400 rounded-sm px-2 py-1'>Technology</div>
          <div className='bg-slate-400 rounded-sm px-2 py-1'>Technology</div>
         
        </div>

        <div className="gallery flex flex-wrap justify-around p-2 mt-8 gap-6 gap-y-10">
          
          { 
            results.map((item)=>{
            
              return( 
                <div className='flex flex-col ' value={item.id}>
                  <img className='w-64 h-64' src={item.urls.small} onClick={() => { setShow(true); setPhoto(item); } } />



                  <button className='bg-slate-700 p-2'>Add to favourite</button></div>
                 
              )
            })

            
          }   <Modal show={show} item={photo} onClose={()=>setShow(false)} />
           
        </div>
      </div>
     
    </>
  )
}

export default Landingpage;
