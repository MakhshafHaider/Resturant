import axios from 'axios';
export const getAllFood =() =>async dispatch=>{
    dispatch({type:"GET_FOOD_REQUEST"});

    try {
        let response =await axios.get("/api/food/getFood");
        console.log(response);
        dispatch({type:"GET_FOOD_SUCCESS", payload: response.data});
    } catch (error) {
        dispatch({type:"GET_FOOD_FAILED", payload: error});
    }
}