import {
    UPDATE_SCRAWL,
    SHOW_SCRAWL_SUCCESS,
    SHOW_SCRAWL_ERROR,
    UPDATE_TITLE,
    UPDATE_SLUG,
    CREATE_SCRAWL_LOADING,
    CREATE_SCRAWL_ERROR,
    CREATE_SCRAWL_SUCCESS,
    UPDATE_CHOISE
} from "../actions/scrawly";

import slugify from "slugify";

const initialState = { //initialisation à vide des elements d'un scrawl
    scrawl: {
        title: '',
        slug: '',
        choices: [],
        people: []
    },
    newdate: {
        date: "",
        poll: ""
    },
    error: "",
    scrawlLoading: false,
    createScrawlLoading: false
};

function scrawlyApp(state = initialState, action) { //etat initial de l'applicaiton initialisé a initialState par défaut
    switch (action.type) { // switch sur les actions

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
                createScrawlLoading: false
            };

        case CREATE_SCRAWL_ERROR:
            return {
                ...state,
                error: "Erreur lors de la création du Scrawl !",
                createScrawlLoading: false
            };
        case UPDATE_CHOISE:
            return {
            ...state,
            scrawl: action.payload
        };

        default:
            return state;
    }
}

export default scrawlyApp;