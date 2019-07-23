import {
    ADD_SCRAWL,
    REMOVE_SCRAWL,
    UPDATE_SCRAWL,
    SCRAWL_ADD_SUCCESS,
    SCRAWL_ADD_ERROR,
    SHOW_SCRAWL_SUCCESS,
    SHOW_SCRAWL_ERROR,
    UPDATE_TITLE,
    UPDATE_SLUG
} from "../actions/scrawly";
import slugify from "slugify";

const initialState = { //initialisation à vide des items
    scrawl: {
        title: '',
        slug: 'test',
        choices: []
    }, // state.todoApp.items pour récupérer les items
    error: null
};

function scrawlyApp(state = initialState, action) { //etat initial de l'applicaiton initialisé a initialState par défaurt
    switch (action.type) { // switch sur les actions
        case ADD_SCRAWL:
            return {items: [...state.items, action.payload]}; // ...state.item est un tableau
                                                              // : est equivalent à == mais pour un objet
        case REMOVE_SCRAWL:
            return {items: state.items.filter(i => i !== action.payload)};

        case UPDATE_SCRAWL:
            let newState = Object.assign({}, state);
            newState.scrawl.slug = action.payload;
            return newState;

        case UPDATE_SLUG:
            return {
                ...state,
                scrawl: {...state.scrawl, slug: slugify(action.payload, {lower: true})}
            };
        case UPDATE_TITLE:
            return {
                ...state,
                scrawl: {...state.scrawl, title: action.payload, slug: slugify(action.payload, {lower: true})}
            };

        case SCRAWL_ADD_SUCCESS:
            break;

        case SCRAWL_ADD_ERROR:
            break;

        case SHOW_SCRAWL_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };
        case SHOW_SCRAWL_ERROR:
            return {...state,
                error:"Scrawl introuvable"
                }
        default:
            return state;
    }
}

export default scrawlyApp;