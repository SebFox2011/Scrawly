export const ADD_SCRAWL = 'ADD_SCRAWL'
export const REMOVE_SCRAWL = 'REMOVE_SCRAWL'
export const UPDATE_SCRAWL = 'UPDATE_SCRAWL'
export const UPDATE_SLUG = 'UPDATE_SLUG'
export const UPDATE_TITLE = 'UPDATE_TITLE'
export const SHOW_SCRAWL_SUCCESS = 'SHOW_SCRAWL_SUCCESS'
export const SHOW_SCRAWL_ERROR ='SHOW_SCRAWL_ERROR'
export const SCRAWL_ADD_SUCCESS ='SCRAWL_ADD_SUCCESS'
export const SCRAWL_ADD_ERROR ='SCRAWL_ADD_ERROR'

//fonction d'ajout de Scrawl
export function AddScrawl (slug){
    return {//retourne un objet
        type: ADD_SCRAWL,
        payload: slug//données associés à l'objet
    };
}

//fonction de suppression de Scrawl
export function removeScrawl (slug){
    return {//retourne un objet
        type: REMOVE_SCRAWL,
        payload: slug//données associés à l'objet
    };
}

export function updateSlug (slug){
    return {type: UPDATE_SLUG, payload:slug};
}

export function updateTitle (title){
    return {type: UPDATE_TITLE, payload:title};
}

//fonction de modification d'un Scrawl
export function editScrawl (slug){
    return dispatch =>
        fetch(process.env.REACT_APP_API +"/polls?slug=" + slug)
            .then(reponse =>reponse.json())
            .then(data => {
                const results = data["hydra:member"];
                if (results.length > 0) {
                    dispatch(showScrawlSuccess(results[0]))
                } else {
                    dispatch(showScrawlError(data))
                }
            });
}

//fonction de mise à jour de Scrawl
export function updateScrawl (slug){
    return {//retourne un objet
        type: UPDATE_SCRAWL,
        payload: slug//données associés à l'objet
    };
}

//fonction d'affichage de Scrawl
export function showScrawl (slug){
    // Appel l'API
    return dispatch =>
        fetch(process.env.REACT_APP_API +"/polls?slug=" + slug)
            .then(reponse =>reponse.json())
            .then(data => {
                const results = data["hydra:member"];
                if (results.length > 0) {
                    dispatch(showScrawlSuccess(results[0]))
                } else {
                    dispatch(showScrawlError(data))
                }
            });
}

export function scrawlAdd(scrawl) {
    let newScrawl = new scrawl();
    return (dispatch) => newScrawl.save(scrawl).then(
        success => dispatch(scrawlAddSuccess(success)),
        error => dispatch(scrawlAddError(error))
    )
}


export function showScrawlSuccess (scrawl) {
    return {type: SHOW_SCRAWL_SUCCESS, payload: scrawl };
}

export function showScrawlError (error) {
    return {type: SHOW_SCRAWL_ERROR, payload: error, error: true};
}

export function scrawlAddSuccess(scrawl) {
    return {type: SCRAWL_ADD_SUCCESS, payload: {scrawl: scrawl}};
}

export function scrawlAddError(error) {
    return {type: SCRAWL_ADD_ERROR, payload: error, error: true};
}