import React from "react";
import { saveAs } from "file-saver";







const Modal = ({show,item, onClose}) => {
    if(!show){
        return null;
    }
    console.log(item);
    
    function downloadImg() {
        saveAs( item.urls.small, "item.png");
    }


  return (
    <div className='text-white text-7xl pt-4 flex h-screen justify-center items-center absolute w-[100%]      '  >
          
        <div className='bg-white flex w-[60%] h-[80%] lg:flex-col '>
          <div className='bg-gray-300 h-[12%] flex justify-between items-center px-4'>
           <h2 className="text-sm text-black "> Preview id: {item.id}</h2>
            <button className="text-sm " onClick={onClose}> ✖</button>
            </div>
            <div className="flex  h-[100%] ">

                <div className="flex justify-center items-center w-[60%]  h-[100%]">
                    <div className="w-[90%]   rounded-sm">
                        <img className="h-[350px] w-[90%] rounded-sm " onClick={downloadImg} src={item.urls.small}></img>
                    </div>
                </div>
                <div className="   w-[40%] h-[100%] ">
                    <p className="text-sm text-black text-left pl-7 p-2 font-bold" >Download</p>
                    <div className="flex flex-col justify-center items-center">
                
                    <div className="  bg-white text-black rounded-sm border  w-[80%]  text-[12px] text-gray-600">
                    <div className="flex justify-between border p-2 bg-gray-200  ">
                      <h6>small</h6><h6>640 X 950</h6>
                        </div>
                    <div className="flex justify-between border p-2 "><h6>small</h6>
                     <h6>1920 X 2660</h6> 
                     </div>
                    <div className="flex justify-between border p-2"><h6>small</h6>
                    3850 X 5640</div>
                    <div className="flex justify-between border p-2"><h6>small</h6>
                     <h6>3850 X 5640</h6>
                      </div>
                    </div> <button className="text-sm bg-green-400 w-[80%] p-2 m-2 rounded-sm" onClick={()=>{downloadImg()}}>Download image</button>
                    </div>
                    <p className="text-sm font-bold text-left  text-black pl-7">Information</p>
                    <div className="flex flex-col text-black text-[12px]  ">
                        <div className="flex px-7 justify-between py-2">
                   <div className="flex flex-col  ">
                           <h6>Users</h6>
                           <p className="font-bold text-black py-2 ">{item.user.first_name}</p>
                   </div>

                   <div className="flex flex-col ">
                           <h6>User id</h6>
                           <p className="font-bold py-2">{item.user.id}</p>
                   </div>

                   <div className="flex flex-col">
                           <h6>Type</h6>
                           <p className="font-bold py-2">John deo</p>
                   </div>
</div>
<div className="flex px-7 justify-between py-2">
                   <div className="flex flex-col ">
                           <h6>Views</h6>
                           <p className="font-bold py-2">{item.width}</p>
                   </div>

                   <div className="flex flex-col  ">
                           <h6>Downloads</h6>
                           <p className="font-bold py-2">{item.height}</p>
                   </div>
                   <div className="flex flex-col ">
                           <h6>Likes</h6>
                           <p className="font-bold py-2">{item.likes}</p>
                   </div></div>
       
</div></div>
        </div>
      </div></div>
  )
}

export default Modal