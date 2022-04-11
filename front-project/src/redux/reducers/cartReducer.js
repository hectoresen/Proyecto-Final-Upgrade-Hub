import { ADD_CART, ADD_CART_ONE, CLEAN_CART, DELETE_CART, REMOVE_CART_ONE } from "../actions/cartActions";

const PRODUCTS = [];

export const cartReducer = (state = PRODUCTS, action) => {

    let {payload, type} = action;

    switch(type) {

        case ADD_CART: 

            const duplicatedProducts = state.find(element =>element._id === payload._id);

            if(duplicatedProducts) {
                duplicatedProducts.amount += 1;
                return [...state]
            }else {return [payload, ...state]}


        case DELETE_CART:

            const position = state.indexOf(payload);

            state.splice(position, 1)

            return [...state]

        case ADD_CART_ONE:
            
            const product = state.find(element => element._id === payload._id);

            if(product.stock>product.amount){
            product.amount +=1;
            }
            
            return [...state]
        
        case REMOVE_CART_ONE:
            
            const productToChange = state.find(element => element._id === payload._id);

            if(productToChange.amount === 1){
                const position = state.indexOf(productToChange);

                state.splice(position, 1)
    
                return [...state]
            }

            productToChange.amount -=1;

        return [...state]

        case CLEAN_CART :

            return  [];
            

        default: 
            return state;

    }   
}