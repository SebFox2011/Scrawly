export const ADD_SLUG = 'ADD_SLUG'
export const REMOVE_SLUG = 'REMOVE_SLUG'
export const UPDATE_SLUG = 'UPDATE_SLUG'

//fonction d'ajout d'item
export function AddSlug (slug){
    return {//retourne un objet
        type: ADD_SLUG,
        payload: slug//données associés à l'objet
    };
}

//fonction de suppression d'item
export function itemRemove (slug){
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
