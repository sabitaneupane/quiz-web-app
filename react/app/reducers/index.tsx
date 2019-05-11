import {Ilist} from '../types/index';

const initialState:Ilist = {
    lists: [],
};

const listReducers = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "FETCH_DATA_SUCCESS":
            newState.lists = action.payload;
            return newState
        case "ADD_HERO_LIST":
            const hero = action.payload;
            newState.lists=[...newState.lists, hero];
            return newState;
        default:
            return state;
    }
};

export default listReducers;