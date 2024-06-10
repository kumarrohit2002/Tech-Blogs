import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';



export const Pagination = () => {
  const {page,totalPages,handlePageChange} = useContext(AppContext);


  return (
    <div className="fixed bottom-0 left-0 w-full text-center text-xl font-bold shadow-lg bg-gray-300 flex justify-center">
      <div className="flex justify-between w-2/5 my-2">
        <div>
          {
            page>1 && (<button onClick={()=>handlePageChange(page-1)} className="bg-blue-500 text-center mx-2 px-2 pb-1 rounded-md">prev</button>)
          }
          {
            page<totalPages && (<button onClick={()=>handlePageChange(page+1)} className="bg-blue-500 text-center px-2 pb-1 rounded-md">next</button>)
          }
        </div>
        <div>
          <p>Page <span>{page}</span> of <span>{totalPages}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Pagination;
