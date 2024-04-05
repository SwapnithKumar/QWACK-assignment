import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Qwack from "./components/Qwack";
import DayWord from "./components/DayWord";
import Games from "./components/Games";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/QWACK-assignment" Component={Home} />
        <Route exact path="/QWACK-assignment/vocabulary" Component={Qwack} />
        <Route
          exact
          path="/QWACK-assignment/vocabulary/word"
          Component={DayWord}
        />
        <Route
          exact
          path="/QWACK-assignment/vocabulary/games"
          Component={Games}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
