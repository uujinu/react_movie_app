import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
    <Navigation />
      {/* props : 렌더링할 스크린, 무엇을 할지 정해줌 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;