import React from 'react';
import loader from './loader.gif'


const Loader = () => {
  return (
    <div className='loader flex flex-c p-2'>
        Loading
 <img className='w-[220px] h-[200px]' src = {loader} alt = "loader" /> 
    </div>
  )
}

export default Loader