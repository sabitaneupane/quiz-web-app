import axios from 'axios';
import {Ilist} from '../types/index';

export const getHeroLists = () => 
    (dispatch) => {
        const url = 'https://ramanamatya.github.io/react-training/json/list.json';
    
        return axios.get(url)
            .then ((response) => {
                dispatch({
                    type: 'FETCH_DATA_SUCCESS',
                    payload: response.data,
                })
            })
            .catch((error) => {
                console.log(error);
            });
};

export const addHeroList = (hero:Ilist) => 
({
    type: "ADD_HERO_LIST",
    payload: hero
})
