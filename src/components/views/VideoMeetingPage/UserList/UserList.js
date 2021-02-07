import React, { useEffect, useState } from "react";

const UserList = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList((prev) => {
      return props.feeds.map((f) => f.rfdisplay);
    });
  }, [props.feeds]);

  const renderUserList = userList.map((u) => {
    return <p key={u}>${u}</p>;
  });

  return (
    <>
      <div style={{ border: "solid 1px", overflow: "auto", height: "500px" }}>
        <strong>{props.username}</strong>
        {renderUserList}
      </div>
    </>
  );
};

export default UserList;
