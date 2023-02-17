import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Detail (props) {
    const {detailId} = useParams () 
    const [character, setCharacter] = useState ({})
    const navigate = useNavigate()

    useEffect (()=> {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [detailId]);

function backToHome () {
    navigate ("/home")
}


return (
    <div>
        <button onClick={backToHome}>BACK</button>
        <h2> {character.name}</h2>
        <h3>{character.status}</h3>
        <h3>{character.specie}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.origin?.name}</h3>
        <img src ={character.image} ></img>


    </div>
)


}

