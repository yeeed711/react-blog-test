import Author from "./Author";
import Category from "./Category";
import { Link } from "react-router-dom";

const Contents = ({ data }) => {
  return (
    <>
      {data.map((posts) => {
        return (
          <li>
            <Link to="/postview" className="post">
              <article>
                <img src={posts.thumbnail} alt="" />
                <div className="contents-wrap">
                  <Category />
                  <h3>{posts.title}</h3>
                  <Author />
                  <p class="post-description">{posts.contents[0].text}</p>
                </div>
              </article>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Contents;
