import { tabUnstyledClasses } from "@mui/base";
import { EDIT_ACCESSORIES_ERROR, EDIT_ACCESSORIES_OK, EDIT_STOCK_ERROR, EDIT_STOCK_OK, GET_ACCESORIES_ERROR, GET_ACCESSORIES, GET_MANCLOTHES, GET_MANCLOTHES_ERROR, GET_SHOES, GET_SHOES_ERROR, GET_WOMENCLOTHES, GET_WOMENCLOTHES_ERROR } from "../actions/apiActions";


const INITIAL_STATE = ({

    accessories: [],

    manClothes: [],

    womenClothes: [],

    sneakers: [],

    error: null,

});

export const apiReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GET_ACCESSORIES : 
            return {
                ...state,
                accessories: action.payload,            
            }

        case GET_ACCESORIES_ERROR: 
            return { 
                ...state,
                error: true,
            }  

        //action.payload.data -> nuevo elemento
        //action.payload.id -> elemento id a cambiar

        case EDIT_ACCESSORIES_OK:

            const productToEdit = state.accessories.find(element =>
                element._id = action.payload.id
            )

            if (productToEdit) {
                productToEdit.stock = action.payload
                return [...state]
            }

            return {
                ...state,
            }

        case EDIT_ACCESSORIES_ERROR:
            return {
                ...state,
                error: true    
            }    

        case EDIT_STOCK_OK:
            
            const stockToEdit = state.accessories.find(element =>
                element._id = action.payload.id
            )

            if (stockToEdit) {
                stockToEdit.stock = action.payload.data
                return [...state]
            }

            return {
                ...state,
            }

        case EDIT_STOCK_ERROR:
            return {
                ...state,
                error: true
            }

        case GET_MANCLOTHES : 
            return {
                ...state,
                manClothes: action.payload,
            }

        case GET_MANCLOTHES_ERROR: 
            return { 
                ...state,
                error: true,
            }
            
        case GET_WOMENCLOTHES : 
            return {
                ...state,
                womenClothes: action.payload,
            }

        case GET_WOMENCLOTHES_ERROR: 
            return { 
                ...state,
                error: true,
            }
            
        case GET_SHOES : 
            return {
                ...state,
                sneakers: action.payload,
            }

        case GET_SHOES_ERROR: 
            return { 
                ...state,
                error: true,
            }
        
        default:
            return state

    }

}