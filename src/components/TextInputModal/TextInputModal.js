import React, { useState, useEffect } from "react";

const TextInputModal = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(() => e.target.value);
  };

  const handleConfirmClick = () => {
    props.onConfirm(inputValue);
    props.setActive(() => false);
  };

  const handleCancelClick = () => {
    props.setActive(() => false);
  };

  return (
    <>
      <div
        style={{
          width: "200px",
          height: "300px",
          border: "1px solid",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: "white",
          transform: "translateX(-50%) translateY(-50%)",
          zIndex: "1",
        }}
      >
        <strong>{props.title}</strong>
        <textarea
          value={inputValue}
          style={{
            width: "80%",
            height: "70%",
            margin: "0 auto",
          }}
          onChange={handleChange}
        />
        <button onClick={handleConfirmClick}>확인</button>
        <button onClick={handleCancelClick}>취소</button>
      </div>
    </>
  );
};

export default TextInputModal;
