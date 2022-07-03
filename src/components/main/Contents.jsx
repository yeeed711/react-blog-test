import Author from "./Author";
import Category from "./Category";
import { Link } from "react-router-dom";

export default function Contents({
  id,
  thumbnail,
  title,
  category,
  userName,
  created,
  children,
}) {
  return (
    <>
      <li>
        <Link to={`/postview/${id}`} className="post">
          <article>
            <img src={thumbnail} alt="" />
            <div className="contents-wrap">
              <Category category={category} />
              <h3>{title}</h3>
              <Author userName={userName} created={created} />
              <p class="post-description">{children}</p>
            </div>
          </article>
        </Link>
      </li>
    </>
  );
}
