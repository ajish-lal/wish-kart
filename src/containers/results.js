import { Button } from "@material-ui/core";
import { Fragment } from "react";
import DisplayCardComponent from "../components/DisplayCard";

const ResultsComponent = ({ results }) => {
  return (
    <Fragment>
      {results.map((data, index) => (
        <DisplayCardComponent key={index} title={data.title} desc={data.desc}>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
          <Button size="small" color="primary">
            +
          </Button>
          <Button size="small" color="primary">
            -
          </Button>
        </DisplayCardComponent>
      ))}
      {results.map((data, index) => (
        <DisplayCardComponent key={index} title={data.title} desc={data.desc}>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
          <Button size="small" color="primary">
            +
          </Button>
          <Button size="small" color="primary">
            -
          </Button>
        </DisplayCardComponent>
      ))}
    </Fragment>
  );
};

export default ResultsComponent;
