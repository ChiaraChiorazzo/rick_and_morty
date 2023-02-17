import Card from '../card/Card';
import style from './cards.module.css'

export default function Cards(props) {

   const { characters, onClose } = props;
   return <div className={style.contenedor}>
      {characters.map((character)=> {
         return <Card 
        key = {character.id}
         name = {character.name}
         species = {character.species}
         gender = {character.gender}
         image = {character.image}
         onClose = {() => onClose(character.id)}
         id = {character.id}
         />
      })}
   </div>;
}
