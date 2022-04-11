import React, { Component, useContext, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { editClothesToApi, getAccesoriesToApi, getManClothesToApi, getShoesToApi, getWomenClothesToApi, deleteClothes } from '../../redux/actions/apiActions';
import { connect } from 'react-redux';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import {RadioButton} from 'primereact/radiobutton';
import AddProduct from '../AddProduct/AddProduct';
import AdmingModalSettings from './AdminModalSettings/AdmingModalSettings';
import AdminModalDelete from './AdminModalDelete/AdminModalDelete';
import { AdminContext } from '../../Contexts/AdminContext';
import { FormattedMessage  as T} from 'react-intl';
import './AdminSettings.scss';

    const INITIAL_STATE = {
        productId: '',
        categorie: '',
    }

const AdminSettings = (props) => {
    const [stock, setStock, handleModal, setHandleModal] = useContext(AdminContext);
    const [activeIndex, setActiveIndex] = useState(0)
    const [showAdminModal, setShowAdminModal] = useState(false);
    const [showAdminDeleteModal, setShowAdminDeleteModal] = useState(false);

    const [productSelected, setProductSelected] = useState(INITIAL_STATE);

    useEffect(() =>{
        props.dispatch(getManClothesToApi())
        props.dispatch(getAccesoriesToApi())
        props.dispatch(getShoesToApi())
        props.dispatch(getWomenClothesToApi())
        if(handleModal){
            props.dispatch(editClothesToApi(stock, productSelected.productId, productSelected.categorie))
            setHandleModal(false);
            setProductSelected(INITIAL_STATE)
        }
    },[handleModal])


    const allProducts = {
        manClothes: props.manClothes,
        accessories: props.accessories,
        womanClothes: props.womenClothes,
        sneakers: props.sneakers
    }

    const clickFromModal = (product) => {
        setShowAdminModal(!showAdminModal)
        setProductSelected({
            productId: product._id,
            categorie: product.categorie
        });
    };
    const deleteProduct = (product) =>{
        setShowAdminDeleteModal(!showAdminDeleteModal)
        props.dispatch(deleteClothes(product._id, product.categorie));
    }

    const getNames = (product) => product.title.toLowerCase();
    const getImage = (product) => <img src={product.image} alt="product"></img>;
    const getStock = (product) => `${product.stock} unidades`;
    const getCategorie = (product) => product.categorie;
    const getPrice = (product) =>  `${product.price} €`;
    const getRating = (product) => <Rating value={product.rating} readOnly cancel={false}></Rating>;

    const lowStock = <div className='lastunits'><T id='AdminSettings.Stock.lastUnits' /></div>;
    const inStock = <div className='inStock'><T id='AdminSettings.Stock.InStock' /></div>;
    const outOfStock = <div className='outOfStock'><T id='AdminSettings.Stock.NoStock' /></div>;

    const btnActions = (product) =>{
        return <div className='btnActions'>
        <div>
            <Button icon="pi pi-pencil" className='p-button-success btnActions-btn' iconPos="right" onClick={()=>{clickFromModal(product)}} />
        </div>
        <div>
            {/* ESTE BOTÓN NO MOSTRARÁ MODAL, MOSTRARÁ PANTALLA DE CONFIRMACIÓN Y ELIMINARÁ EL PRODUCTO */}
            <Button icon="pi pi-trash" className='p-button-warning btnActions-btn' iconPos="left" onClick={()=>{deleteProduct(product)}} />
        </div>
    </div>;
    }

    const getStatus = (product) => {
        if(product.stock <1){
            return outOfStock
        }else if(product.stock <4){
            return lowStock
        }else{
            return inStock
        }
    }

    return (
        <div className='adminpanel'>
            {(showAdminModal) ? <AdmingModalSettings/> : ''}
            {(showAdminDeleteModal) ? <AdminModalDelete/> : ''}
            <div className='adminpanel__header'>
                <Panel header = "Panel de administración" toggleable>
                    <p><i className='pi pi-pencil'></i> <T id="AdminSettings.Stock.Need" />d</p>
                    <p><i className='pi pi-plus'></i> <T id='AdminSettings.Stock.Preview' /></p>
                    <p><i className='pi pi-trash'></i><T id='AdminSettings.Stock.Delete' /></p>
                </Panel>
            </div>
            <div className='adminpanel__products'>
            <TabView activeIndex={activeIndex} onTabChange={(e) =>setActiveIndex(e.index)}>
                <TabPanel className="adminpanel__products-tabpanel" header="Subir artículo" leftIcon='pi pi-plus'>
                    <div className='uploadProduct'>
                        <AddProduct/>
                        <p><T id='AdminSettings.hover' /></p>
                    </div>
                </TabPanel>
                <TabPanel className="adminpanel__products-tabpanel" header="Acesorios" leftIcon='pi pi-pencil'>
                    <div className="card__accesories">
                        <DataTable value={allProducts.accessories} responsiveLayout="scroll">
                            <Column field="Nombre" header="Nombre" body={getNames}></Column>
                            <Column style={{width: "150px", height: "auto"}} field="Imagen" header="Imagen" body={getImage}></Column>
                            <Column field="Categoría" header="Categoría" body={getCategorie}></Column>
                            <Column field="Precio" header="Precio" body={getPrice}></Column>
                            <Column field="Rating" header="Rating" body={getRating}></Column>
                            <Column field="Estado" header="Estado" body={getStatus}></Column>
                            <Column field="Stock" header="Stock" body={getStock}></Column>
                            <Column field="Acciones" header="Acciones" body={btnActions}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
                <TabPanel className="adminpanel__products-tabpanel" header="Calzado" leftIcon='pi pi-pencil'>
                    <div className='card__sneakers'>
                        <DataTable value={allProducts.sneakers} responsiveLayout="scroll">
                            <Column field="Nombre" header="Nombre" body={getNames}></Column>
                            <Column field="Imagen" header="Imagen" body={getImage}></Column>
                            <Column field="Categoría" header="Categoría" body={getCategorie}></Column>
                            <Column field="Precio" header="Precio" body={getPrice}></Column>
                            <Column field="Rating" header="Rating" body={getRating}></Column>
                            <Column field="Estado" header="Estado" body={getStatus}></Column>
                            <Column field="Stock" header="Stock" body={getStock}></Column>
                            <Column field="Acciones" header="Acciones" body={btnActions}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
                <TabPanel className="adminpanel__products-tabpanel" header="Ropa para mujer" leftIcon='pi pi-pencil'>
                    <div className='card__womenClothes'>
                        <DataTable value={allProducts.womanClothes} responsiveLayout="scroll">
                            <Column field="Nombre" header="Nombre" body={getNames}></Column>
                            <Column field="Imagen" header="Imagen" body={getImage}></Column>
                            <Column field="Categoría" header="Categoría" body={getCategorie}></Column>
                            <Column field="Precio" header="Precio" body={getPrice}></Column>
                            <Column field="Rating" header="Rating" body={getRating}></Column>
                            <Column field="Estado" header="Estado" body={getStatus}></Column>
                            <Column field="Stock" header="Stock" body={getStock}></Column>
                            <Column field="Acciones" header="Acciones" body={btnActions}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
                <TabPanel className="adminpanel__products-tabpanel" header="Ropa para Hombre" leftIcon='pi pi-pencil'>
                    <div className='manClothes'>
                        <DataTable value={allProducts.manClothes} responsiveLayout="scroll">
                            <Column field="Nombre" header="Nombre" body={getNames}></Column>
                            <Column field="Imagen" header="Imagen" body={getImage}></Column>
                            <Column field="Categoría" header="Categoría" body={getCategorie}></Column>
                            <Column field="Precio" header="Precio" body={getPrice}></Column>
                            <Column field="Rating" header="Rating" body={getRating}></Column>
                            <Column field="Estado" header="Estado" body={getStatus}></Column>
                            <Column field="Stock" header="Stock" body={getStock}></Column>
                            <Column field="Acciones" header="Acciones" body={btnActions}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
            </TabView>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    accessories:state.api.accessories,
    manClothes:state.api.manClothes,
    womenClothes:state.api.womenClothes,
    sneakers:state.api.sneakers
})


export default connect(mapStateToProps)(AdminSettings);
