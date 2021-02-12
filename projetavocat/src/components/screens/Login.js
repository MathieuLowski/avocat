import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return console.log("ERROR, Invalid email");
    }
    fetch("./login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("answer", data);
        if (data.status === 422) {
          console.log("error", data.error);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          history.push("/profile");
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <>
      <Wrapper>
        <H2>Login</H2>
        <Form
          onSubmit={(ev) => {
            ev.preventDefault();
            postData();
          }}
        >
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
          <Button type="submit">Login</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div``;
const H2 = styled.h2``;
const Input = styled.input``;
const Form = styled.form``;
const Button = styled.button``;
