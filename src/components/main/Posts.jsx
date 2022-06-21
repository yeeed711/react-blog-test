import React, { useEffect, useState } from "react";
import axios from "axios";
import Contents from "./Contents";
import "./posts.css";

const Posts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("./data.json").then((respones) => {
      setPost(respones.data.posts);
    });
  }, []);

  return (
    <ul className="posts">
      <Contents post={post} />
    </ul>
  );
};

export default Posts;
