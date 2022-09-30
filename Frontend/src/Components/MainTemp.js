import React, { useState } from "react";

const MainTemp = ({
  onclick,
  username,
  value,
  onuserchange,
  room,
  onroomchange,
}) => {




  return (
    <>
      <div className="container_main">
        <div className="subcontainer_main">
            <div className="wrap_main">
                <div className="heading_main">
                    <h1>WELCOME TO RANDOM CHAT ROOM</h1>
                </div>
                <form onSubmit={onclick} className="content_main_cnt">
                    <div className="sub_content_main_cnt">
                    <div className="input_main_cnt">
                    <input onChange={onuserchange} value={username} type="text" name="username" placeholder="Enter Username" required/>
                    </div>
                    <div className="input_main_cnt">
                        {/* <input onChange={onroomchange} value={room} type="text" placeholder="Group Name" /> */}
                        <select value={room} onChange={onroomchange} name="roomSelect" className="selectRoom">
                          <option value="Fun">FUN</option>
                          <option value="Coding">CODING</option>
                          <option value="Random">RANDOM</option>
                        </select>
                       
                    </div>
                    <div className="btn_form_maim">
                        <button type="submit">JOIN</button>
                    </div>
                    </div>
                   
                </form>
            </div>

        </div>
      </div>
    </>
  );
};

export default MainTemp;
