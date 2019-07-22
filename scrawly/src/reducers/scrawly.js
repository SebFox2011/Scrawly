import {ADD_SLUG,REMOVE_SLUG,UPDATE_SLUG,DASHBOARD_ADD_SUCCESS,DASHBOARD_ADD_ERROR} from "../actions/scrawly";

const initialState = { //initialisation à vide des items
    scrawl: {
        title: '',
        slug: 'test',
        choices:[]
    } // state.todoApp.items pour récupérer les items
};

function scrawlyApp(state=initialState,action) { //etat initial de l'applicaiton initialisé a initialState par défaurt
    switch (action.type) { // switch ItemADD ou Item remove
        case ADD_SLUG:
            return {items:[...state.items,action.payload]}; // ...state.item est un tableau
                                                            // : est equivalent à == mais pour un objet
        case REMOVE_SLUG:
            return {items:state.items.filter(i => i !== action.payload)};

        case UPDATE_SLUG:
            let newState = Object.assign({}, state);
            newState.scrawl.slug = action.payload;
            return newState;

        case DASHBOARD_ADD_SUCCESS:

        case DASHBOARD_ADD_ERROR:
        default:
            return state;
    }
}

export default scrawlyApp;