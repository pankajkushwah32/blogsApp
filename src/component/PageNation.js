import React, { useContext } from "react";
import { AppContext } from "../context1/AppContext";
const PageNation = () => {
  const {page,totalPages, handlePageChange}=useContext(AppContext)
   console.log(totalPages)

  return (
    <div className="flex  border  shadow-md py-4 w-full justify-center gap-80">
      <div className="flex gap-5 mx-5 font-bold  text-base ">
        {page>1 &&
          <button onClick={()=>handlePageChange(page-1)}>
            Previous
          </button>
        }
        {page<totalPages &&
          <button onClick={()=>handlePageChange(page+1)}>Next</button>
        }
      </div>
      <p className="font-bold text-base space-x-3  mx-3 "> 
        page {page} of {totalPages} 
      </p>
      
    </div>
  )
};
export default PageNation;
