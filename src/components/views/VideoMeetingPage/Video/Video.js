import React, { useRef, useEffect } from "react";
import hark from "hark";

const Video = (props) => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.srcObject = props.stream;
    if (props.stream) {
      let speechEvents = hark(props.stream, {});
      speechEvents.on("speaking", function () {
        onClick();
      });

      speechEvents.on("stopped_speaking", function () {
        // empty
      });
    }
  }, [props.stream]);

  const onClick = () => {
    if (!props.onClick) return;
    props.onClick(videoRef.current.srcObject, props.username);
  };

  return (
    <>
      <video autoPlay playsInline ref={videoRef} onClick={onClick} />
      <span>{props.username}</span>
    </>
  );
};

export default Video;
