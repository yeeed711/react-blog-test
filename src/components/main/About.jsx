import ProfileImg from "../header/ProfileImg";
import Categories from "./Categories";
import SnsList from "./SnsList";
import "./about.css";

function About() {
  return (
    <aside className="about">
      <h2>About Me</h2>
      <ProfileImg className="user-profile" />
      <p className="user-name">Chilli</p>
      <p className="user-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <h3>Categories</h3>
      <Categories />
      <h3>Follow</h3>
      <SnsList />
    </aside>
  );
}

export default About;
