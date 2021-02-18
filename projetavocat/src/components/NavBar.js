import React, { useContext } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";

import UserBar from "./UserBar";

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const renderList = () => {
    if (!state) {
      return (
        <>
          <LoggedOut>
            <Link to="/home">
              <Logo>Avocat</Logo>
            </Link>

            <LoggerTools>
              <Link to="/login">
                <Button>Log In</Button>
              </Link>
              <Link to="/signup">
                <Button>Signup</Button>
              </Link>
            </LoggerTools>
          </LoggedOut>
        </>
      );
    } else {
      return (
        <>
          <LogIn>
            <TopBar>
              <Link to="/home">
                <Logo>Avocat</Logo>
              </Link>
              <CornerDiv>
                <Link to="/profile">
                  <Button>Profile</Button>
                </Link>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    dispatch({ type: "CLEAR" });
                    history.push("/login");
                  }}
                >
                  LogOut
                </Button>
              </CornerDiv>
            </TopBar>
            <SideBar></SideBar>
          </LogIn>
        </>
      );
    }
  };
  return <Wrapper>{renderList()}</Wrapper>;
};

export default NavBar;

{
  /* <Link to="/home">
  <Logo>Avocat</Logo>
</Link>
<Link to="/login">
  <Button>LogIn</Button>
</Link>
<Link to="/signup">
  <Button>Signup</Button>
</Link>
<Link to="/profile">
  <Button>Profile</Button>
</Link> */
}
const Wrapper = styled.div`
  background-color: #3e464d;
`;
const LoggedOut = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LogIn = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CornerDiv = styled.div``;

const LoggerTools = styled.div``;

const Button = styled.button`
  font-family: "Oleo Script", cursive;
  height: 50px;
  font-size: 22px;
  color: white;
  cursor: pointer;
  border: none;
  background: transparent;
  border-radius: 5px;
  width: 80px;
  outline: none;
`;
const Logo = styled.div`
  color: white;
  font-size: 25px;
`;

const SideBar = styled.div`
  position: relative;
`;
