import { ADD_CHARACTER, DELETE_CHARACTER } from "./action-types"


const initialState = {
    myFavorites: [], 
}

export default function reducer (state= initialState, action ){
    switch (action.type) {
    case ADD_CHARACTER: {
        return {...state, myFavorites:[...state.myFavorites, action.payload ] }
    }
    case DELETE_CHARACTER: {
        return {...state, myFavorites: state.myFavorites.filter((elem) => elem.id !== action.payload)}
    }
    default: {
        return {...state};
    }
}
}