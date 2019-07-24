export const UPDATE_SCRAWL = 'UPDATE_SCRAWL'
export const UPDATE_SLUG = 'UPDATE_SLUG'
export const UPDATE_TITLE = 'UPDATE_TITLE'
export const CREATE_SCRAWL_LOADING = 'CREATE_SCRAWL_LOADING'
export const CREATE_SCRAWL_SUCCESS = 'CREATE_SCRAWL_SUCCESS'
export const CREATE_SCRAWL_ERROR = 'CREATE_SCRAWL_ERROR'
export const SHOW_SCRAWL_SUCCESS = 'SHOW_SCRAWL_SUCCESS'
export const SHOW_SCRAWL_ERROR ='SHOW_SCRAWL_ERROR'
export const SCRAWL_ADD_SUCCESS ='SCRAWL_ADD_SUCCESS'
export const SCRAWL_ADD_ERROR ='SCRAWL_ADD_ERROR'


/*
Create Scrawl
 */

export function createScrawl (scrawl){
    // Appel l'API
    return dispatch => {
        dispatch(createScrawlLoading());
        fetch(process.env.REACT_APP_API + "/polls", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scrawl)
        })
            .then(reponse => reponse.json())
            .then(data => {
                if (data["@type"] !== "hydra:Error") {
                    dispatch(createScrawlSuccess(data))
                } else {
                    dispatch(createScrawlError(data))
                }

            });
    }
}

export function createScrawlSuccess(scrawl) {
    return {
        type: CREATE_SCRAWL_SUCCESS,
        payload:scrawl
    }
}

export function createScrawlError(scrawl) {
    return {
        type: CREATE_SCRAWL_ERROR
    }
}

export function createScrawlLoading() {
    return {
        type: CREATE_SCRAWL_LOADING
    }
}

/*
Mise à jour d'un slug
 */
export function updateSlug (slug){
    return {type: UPDATE_SLUG, payload:slug};
}

/*
Mise à jour d'un titre
 */
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

