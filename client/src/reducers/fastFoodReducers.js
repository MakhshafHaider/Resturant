export const getAllFoodReducer = (state = {food :[]}, action) => {
  switch (action.type) {
    case "GET_FOOD_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_FOOD_SUCCESS":
      return {
        food: action.payload,
        loading: false,
      };
    case "GET_FOOD_FAILED":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
