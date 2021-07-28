import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";
import Signup from "./routes/Signup";
import Article from "./routes/Article";
import Chat from "./components/Chat";
import ChatApp from "./components/ChatApp";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/logout" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/articles" component={Article} />
        <Route path="/chatapp" component={ChatApp} />
        <Route
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지 입니다.</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
