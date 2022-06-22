import ProfileImg from "../header/ProfileImg";
import "./viewauthor.css";

function ViewAuthor() {
  return (
    <dl class="author-wrap">
      <dt class="a11y-hidden">Author</dt>
      <dd class="author">
        <ProfileImg /> Chilli
      </dd>
      <dt class="a11y-hidden">Created</dt>
      <dd class="created">2022.05.25</dd>
    </dl>
  );
}

export default ViewAuthor;
