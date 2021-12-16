// import { Button } from "@material-ui/core";
import React from "react";
import useProtectePage from "../../hooks/useProtectedpage"

const RecipesListPage = () => {
  useProtectePage()
  return (
    <div>
      <h1>RecipesListPage</h1>
     
    </div>
  );
};
export default RecipesListPage;
