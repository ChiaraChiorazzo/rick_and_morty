import {connect} from "react-redux"
import Card  from "../card/Card"
function Favorites (props){
return (
    <div>
        {props.myFavorites.map((elem)=> <Card name={elem.name} species={elem.species} gender={elem.gender} image={elem.image} onClose={alert("Toca el corazon para eliminar de fav")}/>)}
    </div>
)
}
function mapStateToProps (state){
    return {
        myFavorites: state.myFavorites
    }
}
export default connect (mapStateToProps) (Favorites)
