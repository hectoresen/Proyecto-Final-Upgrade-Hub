import React from 'react'
import { useState, useEffect } from 'react';
import { getAccesoriesToApi, getManClothesToApi, getShoesToApi, getWomenClothesToApi } from '../../redux/actions/apiActions';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { InputText } from 'primereact/inputtext';
import './Search.scss';
import AdminSettings from '../AdminSettings/AdminSettings';
import Resultado from '../Resultado/Resultado';
import Home from '../../pages/Home/Home';


const Search = (props) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        props.dispatch(getAccesoriesToApi())
        props.dispatch(getManClothesToApi())
        props.dispatch(getShoesToApi())
        props.dispatch(getWomenClothesToApi())
    },[])

    const allProducts = {
        accessories: props.accessories,
        manClothes: props.manClothes,
        womanClothes: props.womenClothes,
        sneakers: props.sneakers
    }

    const handleInput = (ev)=>setInputValue(ev.target.value);

    const result = allProducts.accessories.filter((element)=>
        element.title.includes(inputValue)
    )
    const result1 = allProducts.manClothes.filter((element)=>
        element.title.includes(inputValue)
    )
    const result2 = allProducts.womanClothes.filter((element)=>
        element.title.includes(inputValue)
    )
    const result3 = allProducts.sneakers.filter((element)=>
        element.title.includes(inputValue)
    )

    const productsResult = [...result, ...result1, ...result2, ...result3]


    return (
            <div>
                <InputText value={inputValue} onChange={handleInput} placeholder="Busca aquí!" />
                {
                    (inputValue.length >1)
                    ?
                    <>
                    <Resultado productsResult={productsResult} />
                    </>:
                    console.log('No está activo')
                }
            </div>
    )
}
const mapStateToProps = (state) => ({
    accessories:state.api.accessories,
    manClothes:state.api.manClothes,
    womenClothes:state.api.womenClothes,
    sneakers:state.api.sneakers
})
export default connect(mapStateToProps)(Search)