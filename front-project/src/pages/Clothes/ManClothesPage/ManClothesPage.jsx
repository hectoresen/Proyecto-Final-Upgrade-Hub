import './ManClothesPage.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getManClothesToApi } from '../../../redux/actions/apiActions';
import Card from '../../../components/Card/Card';
import { FormattedMessage  as T} from 'react-intl';

const ManClothesPage = (props) => {

    useEffect(() => {
        props.dispatch(getManClothesToApi())
        
           //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //PRICE

    const [maxPrice, setMaxPrice] = useState(65);

    const manClothes = props.data.filter(product => 
        product.price < maxPrice )


        console.log(manClothes);

    //NEW FILTER

    const [pantalonesActived, setPantalonesActived] = useState();
    const [abrigoActived, setAbrigoActived] = useState();
    const [camisetaActived, setCamisetaActived] = useState();
    const [jerseyActived, setJerseyActived] = useState();

    const isFilterApplied = pantalonesActived || abrigoActived || camisetaActived || jerseyActived ;

    const getSelectedCategories = () => {
        const categories = [];

        if (pantalonesActived) {categories.push("Pantalones")};
        if (abrigoActived) {categories.push("Abrigo")};
        if (camisetaActived) {categories.push("Camiseta")};
        if (jerseyActived) {categories.push("Jersey")};

        return categories;
    }

    const isCategorySelected = (category) => {
        const selectedCategories = getSelectedCategories();
        return selectedCategories.includes(category);
    }

    const filteredAccesories = props.data.filter(product => isCategorySelected(product.filter) && product.price <= maxPrice)

    const handleChangePantalones = (event) => setPantalonesActived(event.target.checked)
    const handleChangeAbrigo = (event) => setAbrigoActived(event.target.checked)
    const handleChangeCamisetas = (event) => setCamisetaActived(event.target.checked)
    const handleChangeJersey = (event) => setJerseyActived(event.target.checked)
    const handleChangePrice = (event) => {setMaxPrice(event.target.value)}

    return (
    <>
    <div className='bg'></div>
        <div className="c-">
            <div className="c-finder">
                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.trousers'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangePantalones} />
                </div>
                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.coats'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangeAbrigo} />
                </div>
                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.shirts'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangeCamisetas} />
                </div>
                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.sweater'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangeJersey} />
                </div>
                <div className="c-finder__price">
                    <label className="c-finder__label" htmlFor="precio"><T id='ckeckBox.item.price'/></label>
                    <input type="range" max="50" min="10" step="5" onChange={handleChangePrice} />
                    <p>{maxPrice}</p>
                </div>
            </div>
        </div>

        <div className="container">
            {isFilterApplied && filteredAccesories.map(product => <Card key={product._id} product={product}></Card>)}    
            {!isFilterApplied && manClothes.map(product => <Card key={product._id} product={product}></Card>)}
        </div>
    </>   ) 
}

const mapStateToProps = (state) => ({
    data: state.api.manClothes,
    cart: state.cart
})

export default connect(mapStateToProps)(ManClothesPage);


