import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getAccesoriesToApi,
  getManClothesToApi,
  getWomenClothesToApi,
} from "../../../../redux/actions/apiActions";
import "./NoCart.scss";

//MUI
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AddOneProductToCart, addProductToCart } from "../../../../redux/actions/cartActions";

import { Card, Grid, Col, Text, Row, Button } from "@nextui-org/react";

export const NoCart = (props) => {

  useEffect(() => {
    props.dispatch(getAccesoriesToApi());
    props.dispatch(getManClothesToApi());
    props.dispatch(getWomenClothesToApi());

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allProducts = {
    accessories: props.accessories,
    manClothes: props.manClothes,
    womanClothes: props.womenClothes,
  };

  const result = allProducts.accessories.filter((element) =>
    element.title.includes("Pañuelo")
  );

  const result1 = allProducts.womanClothes.filter((element) =>
    element.title.includes("Falda")
  );

  const result2 = allProducts.manClothes.filter((element) =>
    element.title.includes("cazadora")
  );

  const productsResult = [...result, ...result1, ...result2];

  return (
    <div className="c-nocart">
      <div className="c-nocart__div">
        <img
          src="https://media.discordapp.net/attachments/933091010693705828/957691255394029638/pngwing.com.png?width=1599&height=1365"
          alt="icono"
        />
      </div>

      <div className="c-nocart__examples">
        {productsResult.map((item, index) => (
          <div className="c-nocart__examples__newCard" key={index}>
            <Grid xs={12} sm={12} md={12}>
              <Card cover css={{ w: "100%" }}   >
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      h3
                      color="black"
                      css={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body>
                  <Card.Image
                    src={item.image}
                    height={400}
                    width="100%"
                    alt="Card example background"
                    css={{ marginLeft: "0%" }}
                  />
                </Card.Body>
                <Card.Footer
                  blur
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text
                        color="#000"
                        size={12}
                        css={{
                          marginTop: "17%",
                          fontWeight: "bolder",
                          fontSize: "15px",
                          marginRight: "5%",
                        }}
                      >
                        {item.price} €
                      </Text>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Button
                          flat
                          auto
                          rounded
                          color="secondary"
                          onClick={() => {
                            props.dispatch(addProductToCart(item));
                          }}
                        >
                          <Text
                            css={{ color: "inherit", fontSize: "50%" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            <IconButton
                              onClick={() => {props.dispatch(AddOneProductToCart(item))}}
                              aria-label="add to favorites"
                            >
                              <AddShoppingCartIcon color="action" />
                            </IconButton>
                          </Text>
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  accessories: state.api.accessories,
  manClothes: state.api.manClothes,
  womenClothes: state.api.womenClothes,
});

export default connect(mapStateToProps)(NoCart);
