import React from "react";

const UserListItem = (props) => {
  const handleRightClick = (e) => {
    e.preventDefault();
    props.handleStatus(e.pageX, e.pageY, props.username);
  };

  return (
    <>
      <p onContextMenu={handleRightClick}> ${props.username}</p>
    </>
  );
};

export default UserListItem;
