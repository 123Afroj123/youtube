import React from 'react'
 import Sidebar from "./Sidebar"
 import Datacard from '../page/Datacard'
const Body = () => {
  return (
  <>
     <div className='flex'>
      <div className='fixed z-10 mt-16 max-sm:hidden'><Sidebar/>
    </div>

    <div className='mt-23'>
         <div><Datacard/></div>
      </div>
    </div>



    
  </>
  )
}

export default Body