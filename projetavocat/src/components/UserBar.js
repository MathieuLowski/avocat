import React, { useContext } from "react";
import { Link, useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../App";
import styled from "styled-components";

/***Dans Creer ma vitrine il s'agit de faire un formulaire qui va envoyer les info sur la vitrine */

/***Dans tableau de bord on voudra etre capable d'ajouter des credits.
 * P-E montrer les demande qui entre. Donner le choix si on accepte ou pas et ensuite baser sur OUI ou NON
 * Si OUI la demande irait dans MES RENDEZ VOUS et dans
 * dans la colone ACCEPTER. si NON la demande va dans une colone DEMANDE REJETE
 * Tout cela peut etre repenser. On peut egalement assigner un statut en fonction de
 * ACCEPTER ou NON
 *
 * */

const UserBar = () => {
  return (
    <Wrapper>
      <SuperLink to="/vitrine" activeClassName="selected">
        <Button>Vitrine</Button>
      </SuperLink>
      <SuperLink to="/createvitrine" activeClassName="selected">
        <Button>Cr&eacute;er ma vitrine</Button>
      </SuperLink>
      <SuperLink to="/rendezvous" activeClassName="selected">
        <Button>Mes rendez-vous</Button>
      </SuperLink>
      <SuperLink to="/pause" activeClassName="selected">
        <Button>Pause le compte</Button>
      </SuperLink>
      <SuperLink to="/dashboard" activeClassName="selected">
        <Button>Tableau de Bord</Button>
      </SuperLink>
    </Wrapper>
  );
};

export default UserBar;

const activeClassName = "nav-item-active";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3e464d;
`;
const SuperLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    border-bottom: 5px solid;
    border-radius: 5px;
    border-image-source: white;
    border-image-slice: 1;
  }
`;
const Button = styled.button`
  color: white;
  font-size: 22px;
  margin: 10px;
  background: transparent;
  border: none;
`;
