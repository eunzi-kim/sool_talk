import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";
import Signup from "./routes/Signup";
import Article from "./routes/Article";
import Chat from "./components/Chat";
import SearchFriends from "./routes/SearchFriends";
import Setting from "./routes/Setting";
import PrivateRoute from "./lib/PrivateRoute";
import PublicRoute from "./lib/PublicRoute";
import ChatApp from "./components/ChatApp";

function App() {
  return (
    <div>
      <PrivateRoute component={Navigation}/>
      <Switch>
        <PrivateRoute path="/" component={Home} exact={true} />
        <PublicRoute restricted="true" path="/login" component={Login} />
        <PublicRoute restricted="true" path="/signup" component={Signup} />
        <PrivateRoute path="/mypage" component={Mypage} />
        {/* <PublicRoute path="/logout" component={Login} />         */}
        <PrivateRoute path="/articles" component={Article} />
        <PrivateRoute path="/chat" component={Chat} />
        <PrivateRoute path="/search-friends" component={SearchFriends} />
        <PrivateRoute path="/setting" component={Setting} />
        <PrivateRoute
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
