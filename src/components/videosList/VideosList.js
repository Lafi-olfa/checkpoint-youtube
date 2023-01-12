import React from "react";
const ListVideos = [
  {
    key: Math.random(),
    url:"https://www.youtube.com/embed/gXdgRKQSZh4",
    title: "Learn Flexbox in 15 Minutes",
    name: "Web Dev Simplified",
  },
  //
  {
    key: Math.random(),
    url:"https://www.youtube.com/embed/ySM-oHmtT60" ,
    title: "[Arabic] HTML CSS Hero Section Part 2",
    name: "Programming With Faris",
  },
  //
  {
    key: Math.random(),
    url:"https://www.youtube.com/embed/gXdgRKQSZh4",
    title: "Learn Flexbox in 15 Minutes",
    name: "Web Dev Simplified",
  },
  {
    key: Math.random(),
    url:"https://www.youtube.com/embed/gXdgRKQSZh4",
    title: "Learn Flexbox in 15 Minutes",
    name: "Web Dev Simplified",
  },
];

const VideosList = () => {
  return (
    <div>
      {ListVideos.map((el) => (
        <div>
          <iframe width="200px" src={el.url} title="vid"></iframe>
          <h2> {el.title} </h2>
          <h4> {el.name} </h4>
        </div>
      ))}
    </div>
  );
};

export default VideosList;
