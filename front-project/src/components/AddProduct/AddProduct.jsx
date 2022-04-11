import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import swal from "sweetalert";
import { ProgressSpinner } from "primereact/progressspinner";
import { FormattedMessage  as T} from 'react-intl';
import "./AddProduct.scss";


const AddProduct = () => {
  const INITIAL_STATE = {
    title: "",
    categorie: "",
    price: 0,
    description: "",
    stock: 0,
    image: "",
    rating: 0,
  };

  
  const [newProduct, setNewProduct] = useState(INITIAL_STATE);
  const [catego, setCatego] = useState();
  const [routesCategorie, setRoutescategorie] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [viewWindow, setviewWindow] = useState(false)
 

  const handleChange = (event) => {
    const names = event.target.name;
    const values = event.target.value;

    
    setviewWindow(true)
    
    setNewProduct({
      ...newProduct,
      [names]: values,
      categorie : routesCategorie,
    });
  };
  
  const postApi = () => {
    const addProduct = {
      title: newProduct.title,
      price: newProduct.price,
      categorie: newProduct.categorie,
      description: newProduct.description,
      stock: newProduct.stock,
      image: newProduct.image,
      rating: Math.random()*4 + 1,
      shoppingFrom: "España",
      filter: "Filtro",
    };
    console.log("Este es el producto a añadir", addProduct);

    const sendProduct = axios.post(`http://localhost:4000/${routesCategorie}`,
      addProduct
    )
    ;


    console.log("sendproduct", routesCategorie);
    console.log(
      "el producto se envio desde el front correctamente",
      sendProduct
    );

    
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setSpinner(true);
    setTimeout(() => {
      swal("El producto se ha subido correctamente");
      setSpinner(false);
    }, 3000);
    postApi();
  };

  const onCategorieChange = (event) => {
    console.log(event.value);
    const values = event.target.value.name;
    setCatego(event.value);
    switch (values) {
      case "Accesorios":
        setRoutescategorie("accessories");
        break;
      case "Ropa para hombre":
        setRoutescategorie("manproducts");
        break;
      // case "Complementos":
      // setRoutescategorie('accesories')
      // break;
      case "Ropa para mujer":
        setRoutescategorie("woman");
        break;
      case "Sneakers":
        setRoutescategorie("sneakers");
        break;
      default:
        break;
    }
  };
  const categories = [
    { name: "Accesorios" },
    { name: "Ropa para hombre" },
    { name: "Complementos" },
    { name: "Sneakers" },
    { name: "Ropa para mujer" },
  ];
  return (
    <div className="addProduct">
      <div className="addProduct__edit">
        <h1><T id="AddProduct.Edit" /></h1>
        <form action="" onSubmit={onSubmit}>
          <div className="categoria">
            {/* <label htmlFor="categorias">Categoria del producto</label> */}
            <Dropdown
              id="categorias"
              value={catego}
              options={categories}
              onChange={onCategorieChange}
              optionLabel="name"
              placeholder= {<T id="AddProduct.Choose" />}
              />
                </div>
               <div className="categoria">
              
            {/* <label htmlFor="titulo">Pon un nombre a tu articulo</label> */}
            <InputText
              id="titulo"
              onChange={handleChange}
              placeholder="articulo"
              name="title"
            />
          </div>
          <div className="categoria">
            <InputNumber
              inputId="stacked"
              onValueChange={handleChange}
              mode="currency"
              currency="EUR"
              name="price"
              placeholder="Precio"
            />
              
            </div>
            <div className="categoria">
            <InputNumber
              id="stock"
              inputId="minmax-buttons"
              onValueChange={handleChange}
              mode="decimal"
              min={0}
              max={100}
              name="stock"
              placeholder="Unidades"
            />
          </div>
          <div className="categoria">
            <InputTextarea
              id="descripcion"
              onChange={handleChange}
              rows={3}
              cols={50}
              autoResize
              placeholder="Describe brevemente tu articulo"
              name="description"
            />
          </div>
          <InputText
            id="url"
            onChange={handleChange}
            placeholder="url de imagen"
            name="image"
            validateOnly={false}

          />
          <Button label={<T id="AddProduct.uploaditem" />} />
          {spinner === true ? <ProgressSpinner /> : undefined}
        </form>
      </div>
      {viewWindow && (

      <div className="addProduct__confirm">
        <div className="el-wrapper">
          <div className="box-up">
            <img className="img" src={newProduct.image} alt="" />
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">{newProduct.title}</span>
                {/* <span className="p-company">{product.categorie}</span> */}
              </div>
              <div className="a-size">{newProduct.description}</div>
            </div>
          </div>

          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>

            <a className="cart" htmlFor="#">
              <span className="price">{newProduct.price}€</span>
              <span className="add-to-cart">
                <span className="txt"><T id="card.addToCart" /></span>
              </span>
            </a>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default AddProduct;
