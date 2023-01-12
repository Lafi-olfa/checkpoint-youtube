import React from "react";
import { CgProfile } from "react-icons/cg";

const comments = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50XUNVmCwLBsiboW_ezv-O6FK2KRmh38SQ&usqp=CAU",
    name: "Asma",
    comment:
      "You explained it 10 times better than my college proffesor in 15 hours, thanks alot sir.",
  },
  //
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnkuifUbzWP7wwUy6LESwHTAwh5PzJk5ihw&usqp=CAU",
    name: "Ahmed",
    comment: "Very well explained",
  },
  //
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJ2nq_kCjAnFNypd6rm42wlBurO0TzAkZDQ&usqp=CAU",
    name: "Olfa",
    comment:
      " This video really helped me a lot to understand some confusing topics for me. Thank you so much!      ",
  },
  //
  {
    id: "Math.random () ",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
    name: "Ali",
    comment:
      "I enjoyed and learn a lot. I had read 5 to 7 big CSS professional books, but webdev explains better, lightfast, thank you so much !!",
  },
  //
];
const CommentsUsers = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "650px",
          justifyContent: "space-between",
        }}
        key=" {el.id} "
      >
        <CgProfile style={{ fontSize: "40px" }} />
        <textarea
          style={{ width: "600px" }}
          placeholder="Laisser un commentaire"
        ></textarea>
      </div>
      {comments.map((el) => (
        <div
          style={{
            display: "flex",
            width: "550px",
            paddingTop: "20px",
          }}
        >
          {/* img */}
          <img
            style={{ width: "90px", height: "100px" }}
            alt="logo"
            src={el.url}
          />
          <div style={{ height: "100px", margin: "10px" }}>
            <h3> {el.name} </h3>
            <p> {el.comment} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsUsers;
