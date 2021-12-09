import React from "react";
import { useHistory } from "react-router";

export function HomePage() {
  const history = useHistory()

    const gotList = () => {
      history.push("/list")
    }

    const goLogin = ()=>{
    history.push("/login")
    }
  return (
    <div >
    HomePage
    <button onClick={gotList}>List</button>
    <button onClick={goLogin}>Login</button>
    </div>
  );
}

