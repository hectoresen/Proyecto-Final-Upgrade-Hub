import { HelpModule, Search } from "../../components";
import { TabView, TabPanel } from "primereact/tabview";
import { useState } from "react";
import "./Home.scss";
import CarouselContainer from "./Carousel/CarouselContainer";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import Map from "../../components/GoogleMaps/Map";

const Home = ({productsResult}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
<>
<div className="filteredOut">
  <Search />
</div>
    <CarouselContainer />
      <div className="home">
        <div className="home__search">

          <TabView
            style={{marginTop:'-20px'}}
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)}
          >
            <TabPanel
              className="home__search-tabpanel"
              header="Ofertas de temporada"
            >
              <div className="home__search-tabpanel2">
                <p>
                 CONSIGUE INCREIBLES DESCUENTOS
                </p>
                <img src="https://woodemia.com/wp-content/uploads/2014/10/crear-cupones-descuento-woocommerce.jpg" alt="Cupones descuentos" />
                <img src="https://www.losalfares.net/wp-content/uploads/2019/03/decimas-mid-season-sales-destacada.jpg" alt="SeasonSales" />
                <img src="https://bio-grancanaria.com/wp-content/uploads/2019/07/newsletter-logo.png" alt="newslater" />
              </div>
            </TabPanel>
            <TabPanel
              className="home__search-tabpanel"
              header="Haznos sugerencias!"
            >
              <div className="home__search__tabpanel1">
              <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                            <InputText id="text" name="text" type="text" ></InputText>
                        <label htmlFor="email">Añadir comentario</label>
                    </span>
                        <Button type="submit" label="Enviar!  " className="mt-2" />
            </div>
              </div>
            </TabPanel>
            
            <TabPanel className="home__search-tabpanel" header="Ayuda">
              <HelpModule />
            </TabPanel>
          </TabView>
        </div>
        <div className="home__contain">
          <div className="home__contain-info">
            
            </div>
          <div className="home__contain-map"></div>
        </div>
      </div>
</>
);
};

export default Home;
