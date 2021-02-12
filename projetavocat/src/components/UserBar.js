import React, { useContext } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";

const UserBar = () => {
  return (
    <Wrapper>
      <Link>
        <Button>EMPTY FUNCTION</Button>
      </Link>
      <Link>
        <Button>EMPTY FUNCTION</Button>
      </Link>
      <Link>
        <Button>EMPTY FUNCTION</Button>
      </Link>
      <Link>
        <Button>EMPTY FUNCTION</Button>
      </Link>
    </Wrapper>
  );
};

export default UserBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button``;
