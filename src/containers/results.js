import { Button, Icon } from "@material-ui/core";
import { Fragment, useState } from "react";
import DisplayCardComponent from "../components/DisplayCard";

const ResultsComponent = ({ results }) => {
  const [productResults, setResults] = useState(results);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (index) => {
    let tempArray = [...productResults];
    let tempObj = { ...tempArray[index] };
    tempObj.quantity = 1;
    tempArray[index] = tempObj;
    setResults(tempArray);
  };

  const increaseQuantity = (data) => { };

  const decreaseQuantity = (data) => { };

  return (
    <Fragment>
      {productResults.map((data, index) => (
        <DisplayCardComponent key={index} data={data}>
          {!data.quantity && (
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => addToCart(index)}
            >
              Add to Cart
            </Button>
          )}
          {data.quantity && (
            <div className="quantity-button">
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => increaseQuantity(index)}
              >
                <Icon color="primary">add</Icon>
              </Button>
              0
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => decreaseQuantity(index)}
              >
                <Icon color="secondary">remove</Icon>
              </Button>
            </div>
          )}
        </DisplayCardComponent>
      ))}
    </Fragment>
  );
};

export default ResultsComponent;
