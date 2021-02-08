import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem/UserListItem";
import ContextMenu from "../../../ContextMenu/ContextMenu";
import TextInputModal from "../../../TextInputModal/TextInputModal";

const whisperMenu = "쪽지 보내기";
const addFriendMenu = "친구추가";
const menus = [whisperMenu, addFriendMenu];

const UserList = (props) => {
  const [userList, setUserList] = useState([]);
  const [contextMenuStatus, setContextMenuStatus] = useState({
    xPos: 0,
    yPos: 0,
    active: false,
  });
  const [activeUsername, setActiveUsername] = useState("");
  const [textInputModalActiveStatus, setTextInputModalActiveStatus] = useState(
    false
  );

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
    if (clickMenu === whisperMenu) {
      setTextInputModalActiveStatus(() => true);
    } else if (clickMenu === addFriendMenu) {
    }
    inactiveContextMenu();
  };

  const handleTextInputModelConfirmText = (data) => {
    props.sendPrivateMessage(data, activeUsername);
  };

  const renderUserList = userList.map((u) => {
    return <UserListItem key={u} username={u} handleStatus={handleStatus} />;
  });

  return (
    <>
      {textInputModalActiveStatus && (
        <TextInputModal
          title={"send whisper"}
          onConfirm={handleTextInputModelConfirmText}
          setActive={setTextInputModalActiveStatus}
        />
      )}
      {contextMenuStatus.active && (
        <ContextMenu
          menus={menus}
          contextMenuStatus={contextMenuStatus}
          onItemClick={handleContextMenuItemClick}
        />
      )}
      <div
        style={{ border: "solid 1px", overflow: "auto", height: "500px" }}
        onContextMenu={handleRightClick}
        onClick={handleLeftClick}
      >
        <h3>접속 유저 목록</h3>
        <strong>{props.username}</strong>
        {renderUserList}
      </div>
    </>
  );
};

export default UserList;
