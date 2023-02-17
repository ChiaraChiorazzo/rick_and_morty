import style from "./card.module.css"
import {Link} from "react-router-dom"
import {addFavorite, deleteFavorite} from "../../redux/actions"
import {connect} from "react-redux"
import React, { useEffect } from "react"



 function Card(props) {

   const [isFav, setIsFav] = React.useState (false)


   function handleFavorite(){
      if (isFav===true){
         setIsFav(false);
         deleteFavorite(props.id)
      }else {
         setIsFav(true)
         addFavorite({props})
      }
   }
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   
   return (
      <div className={style.contenedor} >
         {isFav ? (<button onClick={handleFavorite}>❤️</button>): (<button onClick={handleFavorite}>🤍</button>)}
         <button className={style.boton}
         onClick={props.onClose}>X</button>

         <h2 className={style.title}>{props.name}</h2>

        <Link to={`/detail/${props.id}`} > <img  className={style.imagen}
         src={props.image} 
         alt="" /> </Link> 

       <div className={style.container}>
         <h2 className={style.subtitle}>{props.species}</h2>
         <h2 className={style.subtitle}>{props.gender}</h2>
       </div>
      </div>
   );
}

export function mapStateToProps (state){
   return {
      myFavorites:state.myFavorites
   }
}
export default connect (mapStateToProps, {addFavorite, deleteFavorite})(Card); 