//This is main data layer
export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  (basket?.reduce((amount, item) => item.price + amount, 0))
//from each item which is the quantity, it takes price and adds to the amount which is 0 initially
export const actionTypes = {
  SET_BASKET: "ADD_TO_CART",
  SET_USER: "SET_USER",
  REMOVE_BASKET: 'REMOVE_BASKET'
};
//reducer has state which is the current or original state before changing and action is the task being performed
const reducer = (state, action) => {
  //action.type is the type of action being performed and used when dispatched
  switch (action.type) {
    case actionTypes.SET_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actionTypes.REMOVE_BASKET:
      //index variable finds the index of the basket and findIndex selects the first item of the basket
      const index = state.basket.findIndex(basketItem => basketItem.id === action.id)
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1)
      }
      else {
        console.warn(`Somethings wrong at ${action.id}`)
      }
      return {
        ...state,
        basket: newBasket,
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};
export default reducer;
