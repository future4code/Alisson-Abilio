import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Selection from "../pages/Selection/Selection";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/home">
                    <Home />
                </Route>

                <Route exact path="/detalhes/:id">
                    <Details />
                </Route>
               
                <Route exact path="/selecao" >
                    <Selection />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )

}

export default Rotas