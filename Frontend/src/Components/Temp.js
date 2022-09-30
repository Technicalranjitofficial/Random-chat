import React from "react";
import send from "../greenSend.svg";
import attach from "../attach.svg";

const Temp = ({
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
          <div className="sidebar">
            <div className="main_sidebar">
              <div className="group_info">
                <div className="grpmain">
                  <div className="grphead">
                    <h1>Group: JavaScript</h1>
                  </div>
                  <div className="grpcnt">
                    <p>Group Description</p>
                    <p>Acitve : 6</p>
                    <h2>User has joined</h2>
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
                    <div className="cntusrmain">
                      <div className="users">
                        <h1>hello</h1>
                      </div>
                      <div className="logoonline">
                        <h1>online</h1>
                      </div>
                    </div>
                    <div className="cntusrmain">
                      <div className="users">
                        <h1>hello</h1>
                      </div>
                      <div className="logoonline">
                        <h1>online</h1>
                      </div>
                    </div><div className="cntusrmain">
                      <div className="users">
                        <h1>hello</h1>
                      </div>
                      <div className="logoonline">
                        <h1>online</h1>
                      </div>
                    </div><div className="cntusrmain">
                      <div className="users">
                        <h1>hello</h1>
                      </div>
                      <div className="logoonline">
                        <h1>online</h1>
                      </div>
                    </div><div className="cntusrmain">
                      <div className="users">
                        <h1>hello</h1>
                      </div>
                      <div className="logoonline">
                        <h1>online</h1>
                      </div>
                    </div><div className="cntusrmain">
                      <div className="users">
                        <h1>hello</h1>
                      </div>
                      <div className="logoonline">
                        <h1>online</h1>
                      </div>
                    </div><div className="cntusrmain">
                      <div className="users">
                        <h1>hello</h1>
                      </div>
                      <div className="logoonline">
                        <h1>online</h1>
                      </div>
                    </div><div className="cntusrmain">
                      <div className="users">
                        <h1>hello</h1>
                      </div>
                      <div className="logoonline">
                        <h1>online</h1>
                      </div>
                    </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onclick} className="main_content">
            <div className="msgtitle">
              <h1>WELCOME TO RANDOM CHAT GROUP</h1>
            </div>
            <div className="main_message">
              <div className="message_in">
                <div className="show_messages">
                  <div className="messagecontainer">
                    <div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div><div className="msgboxmain">
                      <div className="msgboxhead">
                        <p>Username</p>
                        <p className="ptime">Time</p>
                      </div>
                      <div className="msgboxcnt">
                        <p>Message</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <div className="msg_div">
                    <div className="msgcntdiv">
                      <div className="input" contentEditable="true">
                        <textarea spellcheck="false" type="text" />
                      </div>
                      <div className="attachment">
                        <div className="at1">
                          <img src={attach} />
                        </div>
                        <div className="at1">
                          <img src={send} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Temp;
