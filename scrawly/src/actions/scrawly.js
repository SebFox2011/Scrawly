export const ITEM_ADD = 'ITEM_ADD'
export const ITEM_REMOVE = 'ITEM_REMOVE'

//fonction d'ajout d'item
export function itemAdd (item){
    return {//retourne un objet
        type: ITEM_ADD,
        payload: item//données associés à l'objet
    };
}

//fonction de suppression d'item
export function itemRemove (item){
    return {//retourne un objet
        type: ITEM_REMOVE,
        payload: item//données associés à l'objet
    };
}
