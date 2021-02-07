import React from "react";

const ContextMenu = (props) => {
  const handleClick = (e) => {
    props.onItemClick(e.currentTarget.value);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: props.contextMenuStatus.xPos,
          top: props.contextMenuStatus.yPos,
          border: "solid 1px",
          width: "100px",
          height: props.menus.length * 40,
          zIndex: "1",
          backgroundColor: "white",
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
