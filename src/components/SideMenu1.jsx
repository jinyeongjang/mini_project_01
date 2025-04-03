import "./SideMenu1.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideMenu1 = () => {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState("");

  const handleToggleClick = (genre, path) => {
    setActiveGenre(genre);
    navigate(path);
  };

  return (
    <div className="side-menu1">
      <div className="button-group1">
        <button
          className={`button button1 ${activeGenre === "액션" ? "active" : ""}`}
          onClick={() => handleToggleClick("액션", "/movie-category-action")}
        >
          액션
        </button>
      </div>
      <div className="button-group2">
        <button
          className={`button button2 ${
            activeGenre === "어드벤쳐" ? "active" : ""
          }`}
          onClick={() =>
            handleToggleClick("어드벤쳐", "/movie-category-adventure")
          }
        >
          어드벤쳐
        </button>
      </div>
      <div className="button-group3">
        <button
          className={`button button3 ${
            activeGenre === "애니메이션" ? "active" : ""
          }`}
          onClick={() =>
            handleToggleClick("애니메이션", "/movie-category-animation")
          }
        >
          애니메이션
        </button>
      </div>
      <div className="button-group4">
        <button
          className={`button button4 ${
            activeGenre === "코미디" ? "active" : ""
          }`}
          onClick={() => handleToggleClick("코미디", "/movie-category-comedy")}
        >
          코미디
        </button>
      </div>
    </div>
  );
};

export default SideMenu1;
