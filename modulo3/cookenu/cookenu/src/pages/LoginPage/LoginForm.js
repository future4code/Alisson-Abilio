import React from "react";
import { InputsContainer, LoginFormContainer } from "./styled";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { login } from "../../services/user";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory()

  const onSubimitForm = (event) => {
    console.log(form);
    event.preventDefault();
    login(form, clear, history);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubimitForm}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
            type={"password"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"dense"}
          >
            Fazer Login!
          </Button>
        </InputsContainer>
      </form>
    </LoginFormContainer>
  );
};
export default LoginForm;
