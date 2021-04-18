import CartComponent from "../../containers/Cart";
import FilterComponent from "../../containers/Filter";
import ResultsComponent from "../../containers/Results";

const displayData = [
  {
    id: "1",
    title: "Moda Rapido",
    desc: "Printed Round Neck T-shirt",
    imgUrl: "",
  },
  {
    id: "2",
    title: "Roadster",
    desc: "Solid Round Neck T-shirt",
    imgUrl: "",
  },
  {
    id: "3",
    title: "HERE&NOW",
    desc: "Solid Polo Collar T-shirt",
    imgUrl: "",
  },
  {
    id: "4",
    title: "Nautica",
    desc: "Solid Polo Collar T-shirt",
    imgUrl: "",
  },
  {
    id: "5",
    title: "Allen Solly Sport",
    desc: "Colourblocked Polo Collar T-shirt",
    imgUrl: "",
  },
];

function Products(props) {
  return (
    <div className="products-container">
      <div className="filter-container">
        <FilterComponent />
      </div>
      <div className="results-container">
        <ResultsComponent results={displayData} />
      </div>
      <div className="cart-container">
        <CartComponent />
      </div>
    </div>
  );
}

export default Products;
