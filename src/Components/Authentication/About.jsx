import React from "react";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const { data, userdata } = useSelector((state) => state.curd);
  console.log("The input", userdata);
  return (
    <div>
      {/* <h1>The User Name :{data.username}</h1> */}
      {
        // userdata.map(post=>(
        //     <>
        //     {post.username+","}&nbsp;
        //     </>
        // ))
        userdata.join(",")
      }
    </div>
  );
};

export default About;
