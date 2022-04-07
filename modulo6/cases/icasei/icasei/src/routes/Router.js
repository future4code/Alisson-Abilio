import { BrowserRouter, Switch, Route } from "react-routee-dom"
import { Home } from "./page/home/Home";
import {Details } from "./page/details/Details";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="">
                    <Home/>
                </Route>

                <Route exact path="/detalhes">
                    <Details/>
                </Route>
 
                <Route>
                    <div>ErrorPage</div>
                </Route>
            </Switch>
        </BrowserRouter>

    )
}