import * as ActionTypes from './ActionTypes';

export const Dishes=(state = {
             isLoading : true,
             errMess : null,
             dishes : []   
    }, action) => {
    switch(action.type){
        case ActionTypes.ADD_DISHES :
            return {...state, dishes :action.payload, errMess: null, isLoading : false};
        case ActionTypes.DISHES_FAILED :
            return {...state, dishes :[], errMess: action.payload, isLoading : false};
        case ActionTypes.DISHES_LOADING :
            return {...state, dishes :[], errMess: null, isLoading : true};
        default: return state;
    }

};