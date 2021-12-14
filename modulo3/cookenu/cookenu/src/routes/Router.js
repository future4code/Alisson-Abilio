import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import ErrorPage from "../pages/ErrorPage/ErroPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exect path="/login" >
          <LoginPage />
        </Route>

        <Route exect path="/cadastro">
          < SignUpPage/>
        </Route>

        <Route exect path="/">
          < RecipesListPage/>
        </Route>

        <Route exect path="/adicionar-receitas">
          <AddRecipesPage />
        </Route>

        <Route exect path="/detalhe/:id">
          <RecipeDetailPage/>
        </Route>

        <Route >
          <ErrorPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
};
export default Router;
