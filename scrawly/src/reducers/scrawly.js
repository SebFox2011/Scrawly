import {
    ADD_SCRAWL,
    REMOVE_SCRAWL,
    UPDATE_SCRAWL,
    SHOW_SCRAWL_SUCCESS,
    SHOW_SCRAWL_ERROR,
    UPDATE_TITLE,
    UPDATE_SLUG,
    CREATE_SCRAWL_LOADING,
    CREATE_SCRAWL_ERROR,
    CREATE_SCRAWL_SUCCESS
} from "../actions/scrawly";
import slugify from "slugify";

const initialState = { //initialisation à vide des items
    scrawl: {
        title: '',
        slug: '',
        choices: []
    }, // state.todoApp.items pour récupérer les items
    error: "",
    scrawlLoading: false,
    createScrawlLoading: false
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

        case SHOW_SCRAWL_SUCCESS:
            return {
                ...state,
                scrawl: action.payload
            };
        case SHOW_SCRAWL_ERROR:
            return {
                ...state,
                error: "Scrawl introuvable"
            };
        case CREATE_SCRAWL_LOADING:
            return {...state, createScrawlLoading: true};
        case CREATE_SCRAWL_SUCCESS:
            return {
                ...state,
                scrawl: action.payload,
                createScrawlLoading:false
            };
        case CREATE_SCRAWL_ERROR:
            return {
                ...state,
                error:"Erreur lors de la création du Scrawl !",
                createScrawlLoading:false
            };
        default:
            return state;
    }
}

export default scrawlyApp;