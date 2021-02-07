import React, { useState, useEffect, useRef } from "react";

const Chatting = (props) => {
  const [chatData, setChatData] = useState([]);
  const [inputChat, setInputChat] = useState("");

  const handleChange = (e) => {
    setInputChat(e.target.value);
  };

  const handleClick = () => {
    props.sendChatData(inputChat);
    setChatData((prev) => [...prev, `나 : ${inputChat}`]);
    setInputChat("");
  };

  useEffect(() => {
    setChatData((prev) => [...prev, props.receiveChat]);
  }, [props.receiveChat]);

  const renderChatData = chatData.map((c, i) => {
    return <p key={i}> {c} </p>;
  });

  return (
    <>
      <div
        style={{
          border: "1px solid",
          overflow: "auto",
          height: "500px",
        }}
      >
        {renderChatData}
      </div>
      <input
        type="text"
        value={inputChat}
        onChange={handleChange}
        style={{ border: "1px solid" }}
      />
      <button onClick={handleClick}>전송</button>
    </>
  );
};

export default Chatting;
