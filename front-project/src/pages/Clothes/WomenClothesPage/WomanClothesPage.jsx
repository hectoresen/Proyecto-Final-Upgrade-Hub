import './WomanClothesPage.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getWomenClothesToApi } from '../../../redux/actions/apiActions';
import Card from '../../../components/Card/Card';
import { FormattedMessage  as T} from 'react-intl';

const WomanClothesPage = (props) => {

    useEffect(() => {
        props.dispatch(getWomenClothesToApi())
            //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //PRICE

    const [maxPrice, setMaxPrice] = useState(40);

    const womanClothes = props.data.filter(product => 
        product.price < maxPrice )

    //FILTER

    const [pantalonesActived, setPantalonesActived] = useState();
    const [topActived, setTopActived] = useState();
    const [faldaActived, setFaldaActived] = useState();

    const isFilterApplied = pantalonesActived || topActived|| faldaActived;

    const getSelectedCategories = () => {
        
        const categories = [];

        if (pantalonesActived) {categories.push("Pantalon")};
        if (topActived) {categories.push("Top")};
        if (faldaActived) {categories.push("Falda")};

        return categories;
    }

    const isCategorySelected = (category) => {
        const selectedCategories = getSelectedCategories();  
        return selectedCategories.includes(category);
    }

    const filteredAccesories = props.data.filter(product => isCategorySelected(product.filter) && product.price <= maxPrice);


    const handleChangePantalones = (event) => setPantalonesActived(event.target.checked);
    const handleChangeTop = (event) => setTopActived(event.target.checked);
    const handleChangeFalda = (event) => setFaldaActived(event.target.checked);
    const handleChangePrice = (event) => {setMaxPrice(event.target.value)}

    return (
    <>
    <div className='bgwc'></div>
        <div className="c-">
            <div className="c-finder">  
                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.trousers'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangePantalones} />
                </div>
                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox">Top</label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangeTop} />
                </div>
                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox">< T id='ckeckBox.item.skirt'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangeFalda} />
                </div>
                <div className="c-finder__price">
                    <label className="c-finder__label" htmlFor="precio">< T id='ckeckBox.item.price'/></label>
                    <input type="range" max="40" min="10" step="5" onChange={handleChangePrice} />
                    <p>{maxPrice}</p>
                </div>
            </div>    
        </div>

        <div className="container">
                {isFilterApplied && filteredAccesories.map(product => <Card key={product._id} product={product}></Card>)}    
                {!isFilterApplied && womanClothes.map(product => <Card key={product._id} product={product}></Card>)}
        </div>
    </>)

}

const mapStateToProps = (state) => ({
    data: state.api.womenClothes,
    cart: state.cart
})

export default connect(mapStateToProps)(WomanClothesPage);


