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
      <video
        autoPlay
        playsInline
        style={{ height: "100%" }}
        ref={videoRef}
        onClick={onClick}
      />
    </>
  );
};

export default Video;
