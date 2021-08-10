import { EXAMPLE, EXAMPLE2 } from '../actions/favoriteActions.js';

const initialState = {
    favorites: [],
    displayFavorite: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case EXAMPLE:
            return {
                
            }
        case EXAMPLE2:
            return {
                
                }
        default:
            return state;
    }
}

export default reducer;