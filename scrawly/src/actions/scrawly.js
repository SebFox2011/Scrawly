export const ADD_SCRAWL = 'ADD_SCRAWL'
export const REMOVE_SCRAWL = 'REMOVE_SCRAWL'
export const UPDATE_SCRAWL = 'UPDATE_SCRAWL'
export const SHOW_SCRAWL = 'SHOW_SCRAWL'
export const SCRAWL_ADD_SUCCESS ='SCRAWL_ADD_SUCCESS'
export const SCRAWL_ADD_ERROR ='SCRAWL_ADD_ERROR'

//fonction d'ajout d'item
export function AddScrawl (slug){
    return {//retourne un objet
        type: ADD_SCRAWL,
        payload: slug//données associés à l'objet
    };
}

//fonction de suppression d'item
export function removeScrawl (slug){
    return {//retourne un objet
        type: REMOVE_SCRAWL,
        payload: slug//données associés à l'objet
    };
}

//fonction de suppression d'item
export function updateScrawl (slug){
    return {//retourne un objet
        type: UPDATE_SCRAWL,
        payload: slug//données associés à l'objet
    };
}

//fonction de suppression d'item
export function showScrawl (slug){
    // Appel l'API
    return dispatch =>
        fetch('http://127.0.0.1:8000/api/polls?slug=' + slug)
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

export function scrawlAddSuccess(scrawl) {
    return {type: SCRAWL_ADD_SUCCESS, payload: {scrawl: scrawl}};
}

export function scrawlAddError(error) {
    return {type: SCRAWL_ADD_ERROR, payload: error, error: true};
}