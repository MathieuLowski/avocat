import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CreateVitrine = () => {
  const [nomAvocat, setNomAvocat] = useState("");
  // const [nomCabinet, setNomCabinet] = useState("");
  // const [langues, setLangues] = useState("");
  // const [palettePrix, setPalettePrix] = useState("");
  // const [domaine, setDomaine] = useState("");
  // const [aneeExperience, setAnneExperience] = useState("");
  // const [adresseCabinet, setAdresseCabinet] = useState("");
  // const [description, setDescription] = useState("");
  // const [regionDeservies, setRegionDeservie] = useState("");
  // const [formation, setFormation] = useState("");

  const update = () => {
    fetch("/ajoutvitrine", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        nomAvocat,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ANSWER", data);
      })
      .catch((err) => {
        console.log("ERRORE!: ", err);
      });
  };

  return (
    <>
      <Wrapper>
        <Form
          onSubmit={(ev) => {
            ev.preventDefault();
            update();
          }}
        >
          <H2>CreateVitrine</H2>
          <Input
            type="text"
            placeholder="Nom Avocat"
            value={nomAvocat}
            onChange={(ev) => {
              setNomAvocat(ev.target.value);
            }}
          />
          {/* <Input
            type="text"
            placeholder="nomCabinet"
            value={nomCabinet}
            onChange={(ev) => {
              setNomCabinet(ev.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Langues"
            value={langues}
            onChange={(ev) => {
              setLangues(ev.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="palettePrix"
            value={palettePrix}
            onChange={(ev) => {
              setPalettePrix(ev.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Domaine"
            value={domaine}
            onChange={(ev) => {
              setDomaine(ev.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="En pratique depui (Annee)"
            value={aneeExperience}
            onChange={(ev) => {
              setAnneExperience(ev.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Adresse"
            value={adresseCabinet}
            onChange={(ev) => {
              setAdresseCabinet(ev.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(ev) => {
              setDescription(ev.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Region Deservie"
            value={regionDeservies}
            onChange={(ev) => {
              setRegionDeservie(ev.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Formation"
            value={formation}
            onChange={(ev) => {
              setFormation(ev.target.value);
            }}
          /> */}
          <Button type="submit">Mettre a jour</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default CreateVitrine;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 250px;
`;
const H2 = styled.h2`
  color: black;
  font-size: 20px;
  margin: 10px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 5px;
  margin: 15px;
  border: none;

  outline: none;
  border-bottom: black 1px solid;
`;
const Button = styled.button`
  height: 50px;
  font-size: 22px;
  color: white;
  cursor: pointer;
  border: solid 1px white;
  background: transparent;
  width: 150px;
  outline: none;
  :hover {
    background-color: white;
    color: grey;
  }
`;
