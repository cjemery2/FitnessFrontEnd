import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken } from "./auth";
import { getAllRoutines, getAllActivities, getUsersRoutine } from "./api";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import {
  Header,
  Home,
  Activities,
  Routines,
  Login,
  Register,
  UserInfo,
} from "./components";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allRoutines, setAllRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [allUserRoutines, setAllUserRoutines] = useState([]);

  function isUserLoggedIn() {
    const token = getToken();

    if (token) {
      setLoggedIn(true);
    }
  }
  const handleActivities = async () => {
    const data = await getAllActivities();
    setAllActivities(data);
  };
  const handleRoutines = async () => {
    const data = await getAllRoutines();
    setAllRoutines(data);
  };
  const handleUserRoutines = async () => {
    const data = await getUsersRoutine();
    setAllUserRoutines(data);
  };
  useEffect(() => {
    handleRoutines();
    handleActivities();
    handleUserRoutines();
    isUserLoggedIn();
  }, []);

  return (
    <Router>
      <div id="App">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/register">
            <Register setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/my-info">
            <UserInfo
              allActivities={allActivities}
              setAllActivities={setAllActivities}
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines}
              allUserRoutines={allUserRoutines}
            />
          </Route>
          <Route path="/activities">
            <Activities allActivities={allActivities} />
          </Route>
          <Route path="/routines">
            <Routines allRoutines={allRoutines} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));