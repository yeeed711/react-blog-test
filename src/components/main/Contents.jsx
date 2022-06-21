import Author from "./Author";
import Category from "./Category";

const Contents = ({ post }) => {
  return (
    <>
      {post.map((post) => {
        return (
          <li>
            <a href="post-view.html" className="post">
              <article>
                <img src={post.thumbnail} alt="" />
                <div className="contents-wrap">
                  <Category />
                  <h3>{post.title}</h3>
                  <Author />
                  <p class="post-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore illum nostrum perferendis voluptas, voluptate
                    soluta corrupti dolore quidem. Placeat, eaque!
                    Exercitationem est facilis dolor quas odio cum incidunt
                    repudiandae vel. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Inventore illum nostrum perferendis
                    voluptas, voluptate soluta corrupti dolore quidem. Placeat,
                    eaque! Exercitationem est facilis dolor quas odio cum
                    incidunt repudiandae vel. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Inventore illum nostrum
                    perferendis voluptas, voluptate soluta corrupti dolore
                    quidem. Placeat, eaque! Exercitationem est facilis dolor
                    quas odio cum incidunt repudiandae vel. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Inventore illum
                    nostrum perferendis voluptas, voluptate soluta corrupti
                    dolore quidem. Placeat, eaque! Exercitationem est facilis
                    dolor quas odio cum incidunt repudiandae vel."
                  </p>
                </div>
              </article>
            </a>
          </li>
        );
      })}
    </>
  );
};

export default Contents;
