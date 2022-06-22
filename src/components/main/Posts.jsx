import React, { useEffect, useState } from "react";
import axios from "axios";
import Contents from "./Contents";
import "./posts.css";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("./data.json").then((respones) => {
      setData(respones.data.posts);
    });
  }, []);

  return (
    <ul className="posts">
      <Contents data={data} />
    </ul>
  );
};

export default Posts;
