export const ADD_SLUG = 'ADD_SLUG'
export const REMOVE_SLUG = 'REMOVE_SLUG'
export const UPDATE_SLUG = 'UPDATE_SLUG'
export const SHOW_SLUG = 'SHOW_SLUG'
export const DASHBOARD_ADD_SUCCESS ='DASHBOARD_ADD_SUCCESS'
export const DASHBOARD_ADD_ERROR ='DASHBOARD_ADD_ERROR'

//fonction d'ajout d'item
export function AddSlug (slug){
    return {//retourne un objet
        type: ADD_SLUG,
        payload: slug//données associés à l'objet
    };
}

//fonction de suppression d'item
export function removeSlug (slug){
    return {//retourne un objet
        type: REMOVE_SLUG,
        payload: slug//données associés à l'objet
    };
}

//fonction de suppression d'item
export function updateSlug (slug){
    return {//retourne un objet
        type: UPDATE_SLUG,
        payload: slug//données associés à l'objet
    };
}

//fonction de suppression d'item
export function showSlug (slug){
    return {//retourne un objet
        type: SHOW_SLUG,
        payload: slug//données associés à l'objet
    };
}

export function scrawlAdd(scrawl) {
    let newScrawl = new scrawl();
    return (dispatch) => newScrawl.save(scrawl).then(
        success => dispatch(scrawlAddSuccess(success)),
        error => dispatch(scrawlAddError(error))
    )
}

export function scrawlAddSuccess(scrawl) {
    return {type: DASHBOARD_ADD_SUCCESS, payload: {scrawl: scrawl}};
}

export function scrawlAddError(error) {
    return {type: DASHBOARD_ADD_ERROR, payload: error, error: true};
}