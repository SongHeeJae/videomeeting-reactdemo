import React, { useRef, useEffect } from "react";

const Video = (props) => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.srcObject = props.stream;
  }, [props.stream]);
  return (
    <>
      <video autoPlay playsInline width="100%" height="100%" ref={videoRef} />
    </>
  );
};

export default Video;
