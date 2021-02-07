import React, { useState, useEffect, useRef } from "react";

const Chatting = () => {
  const [chatData, setChatData] = useState([]);
  const [inputChat, setInputChat] = useState("");
  useEffect(() => {
    for (let i = 0; i < 100; i++) {
      setChatData((prev) => [...prev, "테스트텍스트" + i]);
    }
  }, []);

  const handleChange = (e) => {
    setInputChat(e.target.value);
  };

  const handleClick = () => {
    setInputChat("");
    console.log(inputChat);
  };

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
