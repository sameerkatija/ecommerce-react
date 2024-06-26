import styled from "styled-components";

import {
  GoogleSignInButton,
  InvertedButtonContainer,
  ButtonContainer,
} from "../button/Button-styles";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${ButtonContainer},${GoogleSignInButton},${InvertedButtonContainer} {
    margin-top: auto;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
