import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesList } from "../routes/coordinator";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("tokem", res.data.token);
      goToRecipesList(history);
      clear()
    })
    .catch((err) => {
      alert("Usuário não cadastrado. ");
    });
};
export default login;
