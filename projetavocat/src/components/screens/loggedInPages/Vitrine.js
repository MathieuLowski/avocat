import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Vitrine = () => {
  useEffect(() => {
    fetch("/vitrine", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Wrapper>
        <H2>Vitrine</H2>
      </Wrapper>
    </>
  );
};

export default Vitrine;

const Wrapper = styled.div``;
const H2 = styled.h2``;
