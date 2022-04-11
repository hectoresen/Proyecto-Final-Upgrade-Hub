import './Accesories.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { Rating } from 'primereact/rating';
import { getAccesoriesToApi } from '../../../redux/actions/apiActions';
// import { addProductToCart } from '../../../redux/actions/cartActions';
import Card  from '../../../components/Card/Card';
import { FormattedMessage  as T} from 'react-intl';

const Accesories = (props) => {

    useEffect(() => {
        props.dispatch(getAccesoriesToApi())
            //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //PRICE

    const [maxPrice, setMaxPrice] = useState(50);

    const accessories = props.data.filter(product => 
        product.price < maxPrice )

    console.log(accessories);

    //NEW FILTER

    const [panuelosActived, setPanuelosActived] = useState();
    const [pendientesActived, setPendientesActived] = useState();
    const [collaresActived, setCollaresActived] = useState();
    const [cinturonesActived, setCinturonesActived] = useState();
    const [gorrosActived, setGorrosActived] = useState();

    const isFilterApplied = panuelosActived || pendientesActived || collaresActived || cinturonesActived || gorrosActived;

    const getSelectedCategories = () => {
        
        const categories = [];  //["Pañuelo", "Pendientes"]

        if (panuelosActived) {categories.push("Pañuelo")};
        if (pendientesActived) {categories.push("Pendientes")};
        if (collaresActived) {categories.push("Collar")};
        if (gorrosActived) {categories.push("Gorro")};
        if (cinturonesActived) {categories.push("Cinturon")};

        return categories;
    }

    const isCategorySelected = (category) => {
        const selectedCategories = getSelectedCategories();  // ["Pañuelo","Pendientes"]
        return selectedCategories.includes(category);
    }


    const filteredAccesories = props.data.filter(product => isCategorySelected(product.filter) && product.price <= maxPrice)

    const handleChangePañuelos = (event) => setPanuelosActived(event.target.checked)
    const handleChangePendientes = (event) => setPendientesActived(event.target.checked)
    const handleChangeCollares = (event) => setCollaresActived(event.target.checked)
    const handleChangeGorros = (event) => setGorrosActived(event.target.checked)
    const handleChangeCinturones = (event) => setCinturonesActived(event.target.checked)
    const handleChangePrice = (event) => {setMaxPrice(event.target.value)}

    return (
        <>
        <div className='bga'></div>
        <div className="c-">
            <div className="c-finder">
                <div className="c-finder__div">
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.scarf'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangePañuelos}/>
                </div>

                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.Earrings'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangePendientes} />
                </div>

                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.Necklaces'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangeCollares} />
                </div>

                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.Hat'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangeGorros} />
                </div>

                <div className="c-finder__div" >
                    <label className="c-finder__label" htmlFor="checkbox"><T id='ckeckBox.item.Belt'/></label>
                    <input className="c-finder__input" type="checkbox" onChange={handleChangeCinturones} />
                </div>

                <div className="c-finder__price">
                    <label className="c-finder__label"  htmlFor="precio"><T id='ckeckBox.item.price'/></label>
                    <input type="range" max="50" min="10" step="5" onChange={handleChangePrice} />
                    <p>{maxPrice}</p>
                </div>
            </div>
        </div>
        <div className="container">
            {isFilterApplied && filteredAccesories.map(product => <Card key={product._id} product={product}></Card>)}    
            {!isFilterApplied && accessories.map(product => <Card key={product._id} product={product}></Card>)}
        </div>
    </>)
}

const mapStateToProps = (state) => ({
    data: state.api.accessories,
    cart: state.cart
})

export default connect(mapStateToProps)(Accesories);


