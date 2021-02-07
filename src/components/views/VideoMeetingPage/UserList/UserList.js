import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem/UserListItem";
import ContextMenu from "../../../ContextMenu/ContextMenu";

const whisperMenu = "귓속말";
const addFriendMenu = "친구추가";
const menus = [whisperMenu, addFriendMenu];

const UserList = (props) => {
  const [userList, setUserList] = useState([]);
  const [contextMenuStatus, setContextMenuStatus] = useState({});
  const [activeUsername, setActiveUsername] = useState("");

  useEffect(() => {
    setUserList(() => {
      return props.feeds.map((f) => f.rfdisplay);
    });
  }, [props.feeds]);

  const inactiveContextMenu = () => {
    setContextMenuStatus(() => {
      return { xPos: 0, yPos: 0, active: false };
    });
  };

  const handleStatus = (x, y, username) => {
    setContextMenuStatus(() => {
      return { xPos: x, yPos: y, active: true };
    });
    setActiveUsername(() => username);
  };

  const handleLeftClick = () => {
    inactiveContextMenu();
  };

  const handleRightClick = (e) => {
    e.preventDefault();
  };

  const handleContextMenuItemClick = (clickMenu) => {
    console.log("클릭한메뉴", clickMenu);
    console.log("활성화된유저", activeUsername);
    if (clickMenu === whisperMenu) {
    } else if (clickMenu === addFriendMenu) {
    }
    inactiveContextMenu();
  };

  const renderUserList = userList.map((u) => {
    return <UserListItem key={u} username={u} handleStatus={handleStatus} />;
  });

  return (
    <>
      <ContextMenu
        menus={menus}
        contextMenuStatus={contextMenuStatus}
        onItemClick={handleContextMenuItemClick}
      />
      <div
        style={{ border: "solid 1px", overflow: "auto", height: "500px" }}
        onContextMenu={handleRightClick}
        onClick={handleLeftClick}
      >
        <strong>{props.username}</strong>
        {renderUserList}
      </div>
    </>
  );
};

export default UserList;
