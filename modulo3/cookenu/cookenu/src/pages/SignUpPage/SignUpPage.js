import React from "react";
import {LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logoin.jpg";
import Button from "@material-ui/core/Button";
import SignForm from "./SignForm"
const LoginPage = () => {
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignForm/>
    </ScreenContainer>
  );
};
export default LoginPage;
