import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return console.log("ERROR Invalid email");
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("answer ", data);
        if (data.status === 422) {
          console.log("error", data.error);
        } else {
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Wrapper>
        <H2>Signup</H2>
        <Form
          onSubmit={(ev) => {
            ev.preventDefault();
            postData();
          }}
        >
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
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

export default Signup;

const Wrapper = styled.div``;
const H2 = styled.h2``;
const Input = styled.input``;
const Form = styled.form``;
const Button = styled.button``;
