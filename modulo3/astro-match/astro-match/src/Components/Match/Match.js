import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Home/sytled";

function Metch() {
  const [metchMutuo, setMetchMutuo] = useState([])

  const GetMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alisson-abilio-carver/matches")
      .then((res) => {
        setMetchMutuo(res.data.matches);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const ChoosePerson = () =>({
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alisson-abilio-carver/choose-person`)

    }
  )





  useEffect(()=>{
   GetMatches()
  },[])
  return (
    <div>
      {

      metchMutuo.map((metch) => {
        return(
          <div>

          <p> id:{metch.id}</p>
          <p> nome:{metch.name}</p>
          </div>
        )
      })
    }
      <button onClick={GetMatches}>deram match</button>
     
     
    </div>
  );
}

export default Metch;
