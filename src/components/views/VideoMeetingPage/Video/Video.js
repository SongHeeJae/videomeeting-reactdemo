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
      <video
        autoPlay
        playsInline
        ref={videoRef}
        onClick={onClick}
        muted={props.muted}
      />
      <span>{props.username}</span>
    </>
  );
};

export default Video;
