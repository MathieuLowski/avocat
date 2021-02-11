import React from "react";
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Signup from "./components/screens/Signup";



function App() {
  return (
    <>
    <GlobalStyles/>
    <BrowserRouter>
    <Signup/>
    </BrowserRouter>
    <Wrapper>
      WordUpLowski
    </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
background-color:#3e464d;
`;