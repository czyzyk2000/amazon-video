import { BroowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>test</h1>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
