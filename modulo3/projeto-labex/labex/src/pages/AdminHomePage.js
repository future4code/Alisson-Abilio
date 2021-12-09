import React from "react";
import { useHistory } from "react-router-dom";

export function AdminHomePage() {
  const history = useHistory()

  const goHome = () => {
    history.push("/")
  }

  return (
    <div>
    AdminHomePage
    <button onClick={goHome}>Home</button>
    <button onClick={goHome}>Create Tryp</button>
    <button onClick={goHome}>Details Tryp </button>
    </div>
  )
}


