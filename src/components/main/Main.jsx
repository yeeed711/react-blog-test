import Post from "./Post";
import About from "./About";
import "./main.css";

function Main() {
  return (
    <>
      <main>
        <div className="max-width">
          <Post />
          <About />
        </div>
      </main>
    </>
  );
}

export default Main;
