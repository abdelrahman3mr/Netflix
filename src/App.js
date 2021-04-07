import HomePage from "./components/Home/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import Profile from "./components/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div>
      <Router>
        {!user ? (
          <>
            <Login />
          </>
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>

            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
