import React from "react";
import ProductCardView from "../containers/ProductCardViewContainer";
import { Grid } from "@material-ui/core";
import productList from "../constants";

const CatalogContent = () => {
  const getProductCard = productCardViewObj => {
    return (
      <Grid item xs={12} sm={4}>
        <ProductCardView {...productCardViewObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={1}>
      {productList.map(productCardViewObj => getProductCard(productCardViewObj))}
    </Grid>
  );
};

export default CatalogContent;