import React from "react";

const VideoLink = {
  url: "https://www.youtube.com/embed/1PnVor36_40",
  hashtag: " Introduction to Web Development",
  videoName: "Apprendre le CSS en 20 minutes",
};



const MainPage = () => {
  return (
    <div>
      <iframe style={{ width:"640px",height:"360px"}} title="video" src={VideoLink.url}></iframe>
    <p style={{ width:"400px",height:"20px",color:"blue"}}> {VideoLink.hashtag} </p>
    <h3 style={{ width:"640px",height:"360px"}}> {VideoLink.videoName} </h3>
    </div>
  );
};

export default MainPage;
