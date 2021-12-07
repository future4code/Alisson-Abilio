import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { StyledComponent } from "styled-components";

import AdiminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";



function App() {
  return (
    <div>
     <AdiminHomePage/>
     <ApplicationFormPage/>
     <CreateTripPage/>
     <HomePage/>
     <ListTripsPage/>
     <LoginPage/>
     <TripDetailsPage/>
    </div>
  );
}

export default App;
