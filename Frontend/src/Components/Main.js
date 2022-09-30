import React from "react";

const Main = ({
  onclick,
  username,
  value,
  onuserchange,
  room,
  onroomchange,
}) => {
  return (
    <>
      <div className="container">
        <div className="form_group">
         
         

          <form onSubmit={onclick} className="main_content_main">
            <div className="headin_main">
              <h1>WELCOME TO RANDOM CHAT ROOMS</h1>
            </div>
            <div className="main_form">
              <div className="form_element">
              <div className="form_components ">
                <input
                  type="text"
                  name="username"
                  value={value}
                  onChange={onuserchange}
                  placeholder="Username...!"
                />
              </div>
              <div className="form_components">
                <input
                  type="text"
                  placeholder="Group Name"
                  value={room}
                  onChange={onroomchange}
                />
              </div>
              <div className="form_components">
                <button type="submit" className="btnjoin">
                  Join Chat
                </button>
              </div>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Main;
