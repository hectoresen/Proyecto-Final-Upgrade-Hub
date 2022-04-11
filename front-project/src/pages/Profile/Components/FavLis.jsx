import './FavLis.scss'

import * as React from 'react';
import { connect } from 'react-redux';
import Card from '../../../components/Card/Card';


    const FavLis = ({listFav, dispatch, favFlag, setFavFlag}) => {
    
    const list = listFav;

    return (
        <div className="c-favlist">
        {
            list.map(product=>
                <Card favFlag={favFlag} setFavFlag={setFavFlag}  product={product}></Card>
            )    
        }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(FavLis)
