import Header from "../Header";
import Animation from "../Animation";
import "./index.css";
import { Link } from "react-router-dom";

const Qwack = () => {
  return (
    <div className="app-container">
      <Header />
      <Animation />
      <Link to="/QWACK-assignment/vocabulary/word" className="navigator">
        <div className="game-button">
          <h1 className="game-heading">Word of the day</h1>
        </div>
      </Link>
      <Link to="/QWACK-assignment/vocabulary/games" className="navigator">
        <div className="game-button">
          <h1 className="game-heading">Play Fun Games</h1>
        </div>
      </Link>
    </div>
  );
};
export default Qwack;
