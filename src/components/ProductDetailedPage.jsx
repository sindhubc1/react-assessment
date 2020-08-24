import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../store";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import "./productdetailedview.css";

/* Detailed product view page */

function ProductDetailedPage({ history, location, match, prod, prodId }) {
  // const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const { value, dispatch } = useContext(AppContext);
  const descriptionRef = useRef(null);
  useEffect(() => {
    console.log("history", history, location, match);

    dispatch({ type: "ACTION", payload: "yes" });
    console.log("Product", value, product);
  }, []);

  const id = match.params.id;
  console.log("check", value && value.keyProducts);
  if (value === null) {
    console.log("yes");
  }
  const dataProducts = value && value.entities;
  const productItems = dataProducts && dataProducts.products;
  const product =
    id && productItems && productItems.find((x) => x["productId"] === id);
  if (product && descriptionRef.current) {
    descriptionRef.current.innerHTML = product.shortDescription;
  }
  return (
    <div>
      <Card className={"detailed-card"}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={<Link to="/">Home</Link>}
          title={product.productName}
          subheader={`Product Rating:${product.reviewRating}`}
        />
        <CardMedia
        className="detailed-media"
          image={`https://mobile-tha-server-8ba57.firebaseapp.com${product.productImage}`}
        />

        <CardContent>
          <ul>
            <li>
              Product price: <h3>{product.price}</h3>
            </li>
            <li>
              Product stock: {product.inStock ? "Available" : "Unavailable"}
            </li>

            <li>
              Product description: <span ref={descriptionRef}></span>
            </li>
            <li>Product Review Count: {product.reviewCount}</li>
            <li>Product Review Rating: {product.reviewRating}</li>
          </ul>
          <CardActions>
            <Link to="/">Home</Link>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetailedPage;
