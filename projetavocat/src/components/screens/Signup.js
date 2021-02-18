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
        <Form
          onSubmit={(ev) => {
            ev.preventDefault();
            postData();
          }}
        >
          <H2>Signup</H2>
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
          <Button type="submit">Signup</Button>
          <H5>
            <Link to="/login">Already have an account?</Link>
          </H5>
        </Form>
      </Wrapper>
    </>
  );
};

export default Signup;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
`;
const H2 = styled.h2`
  font-size: 35px;
  margin: 20px;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 5px;
  margin: 15px;
  border: none;
  border-radius: 6rem;
  outline: none;
  border-bottom: black 1px solid;
`;
const Button = styled.button`
  height: 55px;
  font-size: 18px;
  margin: 15px;
  cursor: pointer;
  padding: 10px;
  border: none;
  background-color: #fafafa;
  background: linear-gradient(to right, #ffb442 0%, #d40fb3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font: {
    size: 20vw;
    family: $font;
  }
  font-weight: 600;
  border-radius: 5px;
  width: 200px;
  outline: none;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  :hover {
    background-color: #fafafa;
    border: 3px solid;
    border-radius: 5px;
    border-image-source: linear-gradient(45deg, #ffb442, #d40fb3);
    border-image-slice: 1;
  }
`;
const H5 = styled.h5``;
