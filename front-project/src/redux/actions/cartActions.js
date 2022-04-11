export const ADD_CART = "[Cart] add";
export const DELETE_CART = "[Cart] delete";
export const REMOVE_CART_ONE = "[Cart] delete one";
export const ADD_CART_ONE = "[Cart] add one";
export const CLEAN_CART = "[Cart] clean";

const addCartAction = (data) => ({ 

    type: ADD_CART,

    payload: data,

});

const deleteCartAction = (data) => ({

    type: DELETE_CART,

    payload: data,

});

const AddOneAction = (data) => ({

    type: ADD_CART_ONE,

    payload: data

})

const SustractOneAction = (data) => ({

    type: REMOVE_CART_ONE,

    payload: data

})

const cleanCart = () => ({
    
    type: CLEAN_CART

})

export const addProductToCart = (data) => {

    return (dispatch) => {

        
        dispatch(addCartAction(data))

    }
};

export const deleteProductToCart = (data) => {

    return (dispatch) => {

        dispatch(deleteCartAction(data))

    }
}

export const AddOneProductToCart = data => {

    return (dispatch) => {

        dispatch(AddOneAction(data))

    }

}

export const SustractOneProductToCart = data => {

    return (dispatch) => {

        dispatch(SustractOneAction(data))

    }

}

export const cleanCartRedux = () => {
    return (dispatch) => {

        dispatch(cleanCart())

    }
}

