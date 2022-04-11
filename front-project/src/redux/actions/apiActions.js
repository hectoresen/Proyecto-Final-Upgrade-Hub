import axios from 'axios';
import { EDIT_USER_EMAIL_ERROR } from './authActions';

export const GET_ACCESSORIES = "[Api] getAccessories";
export const GET_ACCESORIES_ERROR = "[Api] getAccessoriesError";

export const GET_MANCLOTHES = "[Api] getManClothes";
export const GET_MANCLOTHES_ERROR = "[Api] getManClothesError";

export const GET_WOMENCLOTHES = "[Api] getWomenClothes";
export const GET_WOMENCLOTHES_ERROR = "[Api] getWomenClothesError";

export const GET_SHOES = "[Api] getShoes";
export const GET_SHOES_ERROR = "[Api] getShoesError";

export const EDIT_ACCESSORIES = "[Api] editAccessories";
export const EDIT_ACCESSORIES_OK = "[Api] editAccessoriesOk";
export const EDIT_ACCESSORIES_ERROR = "[Api] editAccessoriesError";

export const DELETE_CLOTHES = "[Api] deleteClothes";
export const DELETE_CLOTHES_OK = "[Api] deleteClothesOk";
export const DELETE_CLOTHES_ERROR = "[Api] deleteClothesError";


export const EDIT_STOCK = "[Api] editStock";
export const EDIT_STOCK_OK = "[Api] editStockOk";
export const EDIT_STOCK_ERROR = "[Api] editStockError";

//ACCESORIES

const getAccesories = (data) => ({
    type: GET_ACCESSORIES,
    payload: data,
});

const getAccesoriesError = () => ({
    type: GET_ACCESORIES_ERROR
})

const editAccessoriesError = () => ({
    type: EDIT_ACCESSORIES_ERROR,
})

const editAccessoriesOK = (data, id) => ({
    type: EDIT_ACCESSORIES_OK,
    payload: {data: data, id: id}
})


//MANCLOTHES

const getManClothes = (data) => ({
    type: GET_MANCLOTHES,
    payload: data,
});

const getManClothesError = () => ({
    type: GET_MANCLOTHES_ERROR
})

//WOMANCLOTHES

const getWomenClothes = (data) => ({
    type: GET_WOMENCLOTHES,
    payload: data,
});

const getWomenClothesError = () => ({
    type: GET_WOMENCLOTHES_ERROR
})

//SHOES

const getShoes = (data) => ({
    type: GET_SHOES,
    payload: data,
});

const getShoesError = () => ({
    type: GET_SHOES_ERROR
})

//ACCESORIES

export const getAccesoriesToApi = () => {
    return async (dispatch) => {
        try{
            const result = await axios.get('http://localhost:4000/accessories');
            const data = result.data;
            const dataProducts = data.map((element =>{
                    return {amount: 1, ...element}
            }))
            dispatch(getAccesories(dataProducts));
        } catch (error) {
            console.log(error);
            dispatch(getAccesoriesError());
        }
    }
}

//MANCLOTHES

export const getManClothesToApi = () => {
    return async (dispatch) => {
        try{
            const result = await axios.get('http://localhost:4000/manproducts');
            const data = result.data;
            const dataProducts = data.map((element =>{
                return {amount: 1, ...element}
        }))
            dispatch(getManClothes(dataProducts));
        } catch (error) {
            console.log(error);
            dispatch(getManClothesError());
        }
    }
}

//WOMENCLOTHES

export const getWomenClothesToApi = () => {
    return async (dispatch) => {
        try{
            const result = await axios.get('http://localhost:4000/woman');
            const data = result.data;
            const dataProducts = data.map((element =>{
                return {amount: 1, ...element}
        }))
            dispatch(getWomenClothes(dataProducts));
        } catch (error) {
            console.log(error);
            dispatch(getWomenClothesError());
        }
    }
}

//SHOES

export const getShoesToApi = () => {
    return async (dispatch) => {
        try{
            const result = await axios.get('http://localhost:4000/sneakers');
            const data = result.data;
            const dataProducts = data.map((element =>{
                return {amount: 1, ...element}
        }))
            dispatch(getShoes(dataProducts));
        } catch (error) {
            console.log(error);
            dispatch(getShoesError());
        }
    }
}

//EDIT & DELETE CLOTHES


export const editClothesToApi = (stock, id, categorie) => {

    let route = '';

    if(categorie === 'Complementos'){
        route = 'accessories'
    }else if(categorie === 'Ropa para hombre'){
        route = 'man'
    }else if(categorie === 'Ropa para mujer'){
        route = 'woman'
    }else {
        route = 'sneakers'
    };
    const stockToNumber = parseInt(stock);
        return async(dispatch) =>{
            const EditAccessoryRequest = await fetch(`http://localhost:4000/${route}/edit/${id}`,{
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*",
                },
                credentials: "include",
                body: JSON.stringify({stock: stockToNumber}),
            });
            const accessoryResult = await EditAccessoryRequest.json();

            if(accessoryResult.ok){
                dispatch(editAccessoriesOK(accessoryResult, id))
            }else{
                dispatch(editAccessoriesError(accessoryResult.message))
            };
        };
}


export const deleteClothes = (id, categorie) =>{
    console.log('ID Y CATEGORIA REDUX', id, categorie )

    let route = '';

    if(categorie === 'Complementos'){
        route = 'accessories'
    }else if(categorie === 'Ropa para hombre'){
        route = 'man'
    }else if(categorie === 'Ropa para mujer'){
        route = 'woman'
    }else {
        route = 'sneakers'
    };

    return async(dispatch) =>{
        const deleteClothesRequest = await fetch(`http://localhost:4000/${route}/delete/${id}`, {
            method: "PUT",
            headers :{
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*",
            },
            credentials: "include",
        });
        const deleteRequest = await deleteClothesRequest.json();
        if(deleteRequest.ok){
            dispatch({type: DELETE_CLOTHES_OK, payload: deleteRequest})
        }else{
            dispatch({type: DELETE_CLOTHES_ERROR, payload: deleteRequest.message})
        }
    }
}


export const editStockToApi = (list) => {

    console.log("1");

    list.map(element => {

        const id = element._id
        const categorie = element.categorie
        const stock = element.stock - element.amount
        const stockToNumber = parseInt(stock);
        let route = '';

        if(categorie === 'Complementos'){
            route = 'accessories'
        }else if(categorie === 'Ropa para hombre'){
            route = 'man'
        }else if(categorie === 'Ropa para mujer'){
            route = 'woman'
        }else {
            route = 'sneakers'
        };

        console.log("2.He salido del if, ahora mismo hay", id, route, stockToNumber);

        return async (dispatch) => {

        const EditAccessoryRequest = await fetch(`http://localhost:4000/${route}/edit/${id}`,{
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*",
                },
                credentials: "include",
                body: JSON.stringify({stock: stockToNumber}),
            });
            const productResult  = await EditAccessoryRequest.json();

            if(productResult.ok){
                dispatch({type: EDIT_STOCK_OK, payload: productResult})
            }else{
                dispatch({type: EDIT_STOCK_ERROR, payload: productResult})
            };

    }})}