import { Button } from "@material-ui/core";
import { Fragment, useContext, useState } from "react";
import DisplayCardComponent from "../components/DisplayCard";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { ProductContext } from "../providers/product";

const ResultsComponent = ({ results }) => {
  const [productResults, setResults] = useState(results);
  const [, setCartData] = useContext(ProductContext);

  const addToCart = (index) => {
    let tempArray = [...productResults];
    let tempObj = { ...tempArray[index] };
    tempObj.quantity = 1;
    tempArray[index] = tempObj;
    setResults(tempArray);
    setCartData(curr => [...curr, tempObj]);
  };

  const increaseQuantity = (index) => {
    let tempArray = [...productResults];
    let tempObj = { ...tempArray[index] };
    tempObj.quantity += 1;
    tempArray[index] = tempObj;
    setResults(tempArray);

    setCartData(curr => {
      let tempArray = [...curr];
      let index = tempArray.findIndex(elem => elem.id === tempObj.id);
      tempArray[index] = tempObj;
      return tempArray;
    });
  };

  const decreaseQuantity = (index) => {
    let tempArray = [...productResults];
    let tempObj = { ...tempArray[index] };
    tempObj.quantity -= 1;
    tempArray[index] = tempObj;
    setResults(tempArray);

    setCartData(curr => {
      let tempArray = [...curr];
      let index = tempArray.findIndex(elem => elem.id === tempObj.id);
      if (tempObj.quantity > 0)
        tempArray[index] = tempObj;
      else
        tempArray.splice(index, 1);
      return tempArray;
    });

  };

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
          {data.quantity > 0 && (
            <div className="quantity-button">
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => increaseQuantity(index)}
              >
                <AddIcon />
              </Button>
              {data.quantity}
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
