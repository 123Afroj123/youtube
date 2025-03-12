// import React from 'react'

// const Datacard = ({videoid,title,desc}) => {
//   return (
//     <div className='grid mr-2 mt-23 ml-23 '>
//          <div className=" grid sm:ml-auto gap-2 sm:w-full  sm:h-100  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 ">
//          <div className=' '>
//          <iframe
//            className='p-2 max-sm:h-100 max-sm:w-100 sm:h-100 sm:w-140 md:h-100 md:w-100 xl:w-120 xl:h-100 2xl:w-170 2xl:h-100'
//             // width="550"
//             // height="400"
//             src={`https://www.youtube.com/embed/${videoid}`}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             title={title}
//           ></iframe>
//           <h3>{desc}</h3> 
//          </div>
//          {/* <div className=' bg-gradient-to-r from-purple-400 to-indigo-600  h-100 rounded  '>
//          </div>
//          <div className=' bg-gradient-to-r from-purple-400 to-indigo-600  h-100 rounded  '></div>
//          <div className=' bg-gradient-to-r from-purple-400 to-indigo-600  h-100 rounded  '> */}
  
//          {/* </div> */}


         
//         </div>
//     </div>
//   )
// }

// export default Datacard


import React from 'react';

const Datacard = ({ videoid, title }) => {
  return (
   <div className=' mb-2 inline-block '>
        <div className=" max-sm:w-100 max-sm:mr-15 sm:w-120 sm:ml-23 
                          md:w-80 xl:w-40 md:ml-18 
                           2xl:w-80 2xl:h-40
                          mt-2 hover:outline-3 outline-gray-500 outline-1 shadow-lg rounded-lg overflow-hidden ml-18">
      <div>
        <iframe
          className="w-full max-sm:h-70 sm:h-80 md:h-70 xl:h-60 2xl:h-50 "
          src={`https://www.youtube.com/embed/${videoid}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Title"
        ></iframe>
      </div>
      <div className="p-3 ">
        <h5 className="text-lg font-semibold mb-2 max-sm:text-wrap">{title}</h5>
      </div>
    </div>
   </div>
  );
};

export default Datacard;



