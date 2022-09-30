import React from 'react'
import delet from "../delete.svg";
const PreviewImage = ({imagePrev,imagePV,setimagePrev}) => {
  return (
    <div>
      <div className={`main_cnt_preview ${imagePrev}`}>
        <div className="sub_cnt_preview">
            <div className="cancelBtn">
              <button onClick={(e)=>{
                e.preventDefault();
                setimagePrev("");
              }}>

               <img src={delet} alt="" />
              </button>
            </div>
            <div className="image_preview">
                <img src={imagePV} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewImage
