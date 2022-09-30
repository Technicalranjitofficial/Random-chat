import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import send from "../greenSend.svg";
import attach from "../attach.svg";
import delet from "../delete.svg";
import PreviewImage from "./PreviewImage";
// import PreviewImage from "../PreviewImage";

// import ScrollToBottom from "react-scroll-to-bottom";
const Chat = ({
  username,
  usesrList,
  sendMessage,
  onChange,
  value,
  roomUsers,
  mes,
  typing,
  settyping,
  id,
  settyuser,
  tyuser,
  imageOnChange,
  // attachbtn,
  btnstatus,
  atdis,
  setFile,
  setBtnStatus,
  imgLoading,
  
}) => {
  

 





  const [msg,setMsg]=useState("");
  let a= roomUsers.users;
  const [ruser,setruser] = useState("");
  const [imagePrev,setimagePrev] = useState("");
  const [imagePV,setimagePV] = useState("");
  // const [btnstatus,setBtnStatus] = useState(true);



 
  const cancel=(e)=>{
      setFile();
      setBtnStatus(false)
    

  }

  const funImagePrev=(e)=>{

    e.preventDefault();
    setimagePrev("prev");
  }

  useEffect(()=>{
    try {
      const length = roomUsers.users.length;

      setruser(length-1)
    } catch (error) {
      console.log(error)
    }
    try {
      setMsg(mes);
      
    } catch (error) {
      console.log(error)
    }
   
  
  },[roomUsers])

 

useEffect(()=>{
  setTimeout(() => {
    setMsg("")
    settyping("");
    settyuser("")
  }, 5000);
})


  return (
    <>
      <div className="container">
        <div className="form_group">
          <div className="sidebar">
            <div className="main_sidebar">
              <div className="group_info">
                <div className="grpmain">
                  <div className="grphead">
                    <h1>Group: {roomUsers.room}</h1>
                  </div>
                  <div className="grpcnt">
                  <div>
       
       <p>😈Nothing will be Stored!!!😈</p>
       </div>

                    <p>Acitve : {ruser?ruser:"0"}</p>
                    <h2>{msg?msg:<p className="dv">Developer: <a href="https://instagram.com/official_ranjitdas">Connect</a></p>}</h2>
                  </div>
                </div>
                <hr color="#0abeef" />
              </div>

              <div className="usersInfo">
                <div className="usrmain">
                  <div className="usrhead">
                    <h4>Currently Online</h4>
                  </div>
                  <div className="usrcnt">
                    <div className="scrollingdiv">

                      {a && a.filter(user=>user.id!==id).map((ruser)=>{
                        
                        
                        return  <div className="cntusrmain">
                        <div className="users">
                          <h1>{ruser.username}</h1>
                          {typing===ruser.id?<p>{ruser.username} is typing</p>:""}
                        </div>
                        <div className="logoonline">
                          <h1>online</h1>
                         
                        </div>
                      </div>
                      })}

                     


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main_content">
            <div className="msgtitle">
              <div className="fl">
              <h1>WELCOME TO RANDOM CHAT ROOM</h1>
             <div className="spanuser">
              <span>Active Users : {ruser?ruser:"0"} </span>
              <span>Group : {roomUsers && roomUsers.room} </span>
             </div>
              <span>{typing!==id?`${tyuser}`:""}</span>
             

           
              </div>
             
            </div>
            <div className="main_message">
              <div className="message_in">
                <div className="show_messages">
                  <div className="messagecontainer">
                    <ScrollToBottom className="sp">
                      {usesrList &&
                        usesrList.map((user) => {
                          
                       
                          
                          return (
                            <div
                              className="msgg "
                              id={id === user.id? "your" : "othe"}
                            >



                              <div className="msgboxmain">
                                <div className="msgboxhead">
                                  <p>{user.username}</p>
                                  <p className="ptime">{user.time}</p>
                                </div>
                                <div className="msgboxcnt">
                                  
                                  {user.image && user.message?<div><img onClick={(e)=>{
                                    setimagePrev("prev")
                                    setimagePV(user.image)
                                    
                                  }} src={user.image} alt="image"/> <p>{user.message}</p></div> : user.message && !user.image?
                                  <p>{id===user.id && user.st==="new_user" ?"You have Joined The Chat":user.message}</p>:<img onClick={(e)=>{
                                    setimagePrev("prev")
                                    setimagePV(user.image)
                                    
                                  }} src={user.image} alt="image"/>
                                }
                                 </div>

                              </div>
                              <PreviewImage setimagePrev={setimagePrev} imagePV={imagePV} imagePrev={imagePrev} />
                            </div>
                          );
                         
                        })
                       
                        
                        }
                    </ScrollToBottom>
                  </div>
                </div>
                <div className="btn">
                  <div className="msg_div">
                    <form
                      onSubmit={sendMessage}
                      id="form"
                      className="msgcntdiv"
                    >
                      <div className="input">
                        <textarea
                          className="sb"
                          spellcheck="false"
                          type="text"
                          value={value}
                          onChange={onChange}
                        />
                      </div>
                      <div className="attachment">
                        <div className="at1">
                          {!btnstatus? <label htmlFor="imginput">
                            <img src={attach} />
                          </label>: <button onClick={cancel} id="btnsubmit">
                            <img src={delet} />
                          </button>}
                       
                         {/* <label htmlFor="imginput">
                            <img src={attach} />
                          </label>
                          */}
                          <input type="file" onChange={imageOnChange} id="imginput" accept="image/*" disabled={atdis} />
                        </div>
                        <div className="at1">
                          <button id="btnsubmit" type="submit">
                            <img src={send} />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Chat;
