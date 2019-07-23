import {
    ADD_SCRAWL,
    REMOVE_SCRAWL,
    UPDATE_SCRAWL,
    SCRAWL_ADD_SUCCESS,
    SCRAWL_ADD_ERROR,
    SHOW_SCRAWL
} from "../actions/scrawly";

const initialState = { //initialisation à vide des items
    scrawl: {
        title: '',
        slug: 'test',
        choices:[]
    }, // state.todoApp.items pour récupérer les items
    error: null
};

function scrawlyApp(state=initialState,action) { //etat initial de l'applicaiton initialisé a initialState par défaurt
    switch (action.type) { // switch sur les actions
        case ADD_SCRAWL:
            return {items:[...state.items,action.payload]}; // ...state.item est un tableau
                                                            // : est equivalent à == mais pour un objet
        case REMOVE_SCRAWL:
            return {items:state.items.filter(i => i !== action.payload)};

        case UPDATE_SCRAWL:
            let newState = Object.assign({}, state);
            newState.scrawl.slug = action.payload;
            return newState;

        case SCRAWL_ADD_SUCCESS:

        case SCRAWL_ADD_ERROR:

        case SHOW_SCRAWL:
            return {
                ...state,
                scrawl: action.payload
            };
        default:
            return state;
    }
}

export default scrawlyApp;