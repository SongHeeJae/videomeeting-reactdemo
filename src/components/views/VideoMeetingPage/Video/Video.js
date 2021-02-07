import React, { useRef, useEffect } from "react";

const Video = (props) => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.srcObject = props.stream;
  }, [props.stream]);

  const onClick = (e) => {
    if (!props.onClick) return;
    props.onClick(videoRef.current.srcObject);
  };

  return (
    <>
      <video autoPlay playsInline ref={videoRef} onClick={onClick} />
      {props.username && <p>props.username</p>}
    </>
  );
};

export default Video;
