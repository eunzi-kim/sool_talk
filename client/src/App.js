import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path="/login" component={Login} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/logout" component={Login} />
    </HashRouter>
  );
}

export default App;
