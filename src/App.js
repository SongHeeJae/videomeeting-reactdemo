import VideoMeetingPage from "./views/VideoMeetingPage/VideoMeetingPage";

function App() {
  console.log(process.env.REACT_APP_SERVER);
  return (
    <>
      <VideoMeetingPage />
    </>
  );
}

export default App;
