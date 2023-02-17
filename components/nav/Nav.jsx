import { Route } from "react-router-dom";
import About from "../about/About";
import SearchBar  from "../searchbar/SearchBar";
import style from "./nav.module.css"
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <>
        <div className={style.contenedor}>
        <button onClick={props.logOut}>LOGOUT</button>
            <ul className={style.listaContenedor}>
               <Link to="/about" > <li className={style.listaItem}>About</li> </Link>
               <Link to="/home" > <li className={style.listaItem}>Home</li> </Link>
               <Link to="/favorites"> <li className={style.listaItem}>Favoritos</li></Link>
            </ul>
            <SearchBar onSearch = {props.onSearch}/>
           
        </div>
       
        </>
    )

}

export default Nav 