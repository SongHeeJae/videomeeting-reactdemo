import React, { useRef, useEffect } from "react";

const Video = (props) => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.srcObject = props.stream;
  }, [props.stream]);

  const onClick = (e) => {
    if (!props.onClick) return;
    props.onClick(videoRef.current.srcObject, props.username, props.muted);
  };

  return (
    <>
      <video autoPlay playsInline ref={videoRef} onClick={onClick} />
      <div>{props.username}</div>
    </>
  );
};

export default Video;
