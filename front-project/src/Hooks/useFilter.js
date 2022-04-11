import React from "react";
import { useState } from "react";
import { connect } from 'react-redux';

/* ACCESSORIES */
const useFilter = () =>{


    const [inputValue, setInputValue] = useState('JOSE');

    const filterInputValue = (arg) =>{setInputValue(arg)};

    return [
        filterInputValue,
        inputValue
    ]
}

const mapStateToProps = (state) => ({
    accessories:state.api.accessories,
    manClothes:state.api.manClothes,
    womenClothes:state.api.womenClothes,
    sneakers:state.api.sneakers
})

export default connect(mapStateToProps)(useFilter);
