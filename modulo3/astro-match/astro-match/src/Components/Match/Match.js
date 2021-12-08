import { useState, useEffect } from "react";
import axios from "axios";

function Metch() {
  const [matchmutuo, setMatchMutuo] = useState([]);

  const GetMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alisson-carver/matches"
      )
      .then((res) => {
        setMatchMutuo(res.data.matches);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    GetMatches();
  }, []);

  return (
    <div>
      <h1>Quem deu Match</h1>
      {matchmutuo.map((item) => {
        return (
          <lo>
            <li>{item.name}</li>
          </lo>
        );
      })}
    </div>
  );
}
export default Metch;
