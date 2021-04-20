import { Button, Icon } from "@material-ui/core";
import { Fragment, useState } from "react";
import DisplayCardComponent from "../components/DisplayCard";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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
                <AddIcon />
              </Button>
              0
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => decreaseQuantity(index)}
              >
                <RemoveIcon />
              </Button>
            </div>
          )}
        </DisplayCardComponent>
      ))}
    </Fragment>
  );
};

export default ResultsComponent;
