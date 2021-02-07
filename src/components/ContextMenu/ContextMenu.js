import React, { useState, useEffect } from "react";

const ContextMenu = (props) => {
  const [status, setStatus] = useState({ xPos: 0, yPos: 0, active: false });

  const handleClick = (e) => {
    props.onItemClick(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(() => {
      return {
        xPos: props.contextMenuStatus.xPos,
        yPos: props.contextMenuStatus.yPos,
        active: props.contextMenuStatus.active,
      };
    });
  }, [props.contextMenuStatus]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: status.xPos,
          top: status.yPos,
          border: "solid 1px",
          width: "100px",
          height: props.menus.length * 40,
          display: status.active ? "block" : "none",
        }}
      >
        {props.menus.map((m) => {
          return (
            <input
              type="button"
              key={m}
              onClick={handleClick}
              value={m}
              style={{
                width: "100%",
                border: "0",
                outline: "0",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContextMenu;
