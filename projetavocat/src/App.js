import React, { createContext, useContext, useReducer, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/screens/Home";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";
import Login from "./components/screens/Login";
import NavBar from "./components/NavBar";
import UserBar from "./components/UserBar";
import Vitrine from "./components/screens/loggedInPages/Vitrine";
import createvitrine from "./components/screens/loggedInPages/CreateVitrine";
import RendezVous from "./components/screens/loggedInPages/RendezVous";
import Pause from "./components/screens/loggedInPages/Pause";
import Dashboard from "./components/screens/loggedInPages/DashBoard";

import { reducer, initialState } from "./reducers/useReducer";
import CreateVitrine from "./components/screens/loggedInPages/CreateVitrine";

//First, we create a Context,
//and make it available to the React tree with <Context.Provider>
export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  //Next, we can consume that context anywhere
  //below the Provider with useContext
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history.push("/signup");
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/vitrine">
        <Vitrine />
      </Route>
      <Route exact path="/createvitrine">
        <CreateVitrine />
      </Route>
      <Route exact path="/rendezvous">
        <RendezVous />
      </Route>
      <Route exact path="/pause">
        <Pause />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!state) {
    return (
      <>
        <UserContext.Provider value={{ state, dispatch }}>
          <GlobalStyles />
          <Wrapper>
            <BrowserRouter>
              <NavBar />
              <Routing />
            </BrowserRouter>
          </Wrapper>
        </UserContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <UserContext.Provider value={{ state, dispatch }}>
          <GlobalStyles />
          <Wrapper>
            <BrowserRouter>
              <NavBar />
              <Molder>
                <UserBar />
                <Routing />
              </Molder>
            </BrowserRouter>
          </Wrapper>
        </UserContext.Provider>
      </>
    );
  }
}

export default App;

const Wrapper = styled.div`
  background-color: #cfcfcf;
  display: flex;
  flex-direction: column;
`;

const Molder = styled.div`
  display: flex;
`;
