import React, { useRef, useEffect, useState } from "react";

const Video = (props) => {
  const videoRef = useRef();

  useEffect(() => {
    if (props.stream) {
      videoRef.current.srcObject = props.stream;
    }
  }, [props.stream]);

  const onClick = () => {
    if (!props.onClick) return;
    props.onClick(videoRef.current.srcObject, props.username);
  };

  return (
    <>
      <div>
        <video
          style={{ width: "100%", height: "100%" }}
          autoPlay
          playsInline
          ref={videoRef}
          onClick={onClick}
          muted={props.muted}
        />
      </div>
      <div>{props.username}</div>
    </>
  );
};

export default Video;
