import "./App.css";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/error/Error";
import Jeopardy from "./components/jeopardy/Jeopardy";
import jeopardyDisplay from "./components/jeopardydisplay/jeopardydisplay";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Matt" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
