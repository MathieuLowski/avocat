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
            <Button>
              <Link to="/login">
                <Button>Log In</Button>
              </Link>
              <Link to="/signup">
                <Button>Signup</Button>
              </Link>
            </Button>
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
                    history.push("/signin");
                  }}
                >
                  LogOut
                </Button>
              </CornerDiv>
            </TopBar>
            <SideBar>
              <UserBar />
            </SideBar>
          </LogIn>
        </>
      );
    }
  };
  return (
    <header>
      <Wrapper>{renderList()}</Wrapper>
    </header>
  );
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
const Wrapper = styled.div``;
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
const Button = styled.button`
  font-size: 18px;
  color: white;
  background: none;
  border: white solid 1px;
  padding: 0px;
  margin: 0px;
`;
const Logo = styled.h1`
  color: white;
`;

const SideBar = styled.div`
  position: relative;
`;
