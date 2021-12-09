import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AdminHomePage } from './pages/AdminHomePage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { CreateTripPage } from './pages/CreateTripPage';
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { LoginPage } from './pages/LoginPage';
import { TripDetaislsPage } from './pages/TripDetailsPage';

export default function App() {
  return (
    <BrowserRouter>
    <Switch>
  

      <Route exact path={"/"}>
        <HomePage />
      </Route>

      <Route exact path={"/adimim"}>
        <AdminHomePage/>
      </Route>

      <Route exact path={"/application"}>
        <ApplicationFormPage/>
      </Route>

      <Route exact path={"/create"}>
        <CreateTripPage/>
      </Route>

      <Route exact path={"/list"}>
        <ListTripsPage />
      </Route>

      <Route exact path={"/login"}>
        <LoginPage />
      </Route>

      <Route exact path={"/trip"}>
        <TripDetaislsPage/>
      </Route>
    </Switch>
  </BrowserRouter>
  )
}