import { useState } from "react";
import style from "./searchBar.module.css"


export default function SearchBar(props) {
   const [character, setCharacter] = useState("")

   const handleCharacter = (event) => {
      const value = event.target.value
      setCharacter (value) 
   }
   
   return (
      <div className={style.container}>
         <input className= {style.input} type='search'  onChange={handleCharacter}/>
      <button className={style.boton} onClick={() => {props.onSearch(character)}}>Agregar</button>
      </div>
   );
}
