import CartComponent from "../../containers/Cart";
import FilterComponent from "../../containers/Filter";
import ResultsComponent from "../../containers/Results";

const displayData = [
  {
    id: "1",
    title: "Moda Rapido",
    desc: "Printed Round Neck T-shirt",
    imgUrl: "/assets/images/products/1.webp",
    price: 320,
    availableQuantity: 10,
  },
  {
    id: "2",
    title: "Roadster",
    desc: "Solid Round Neck T-shirt",
    imgUrl: "",
    price: 320,
    availableQuantity: 10,
  },
  {
    id: "3",
    title: "HERE&NOW",
    desc: "Solid Polo Collar T-shirt",
    imgUrl: "",
    price: 320,
    availableQuantity: 10,
  },
  {
    id: "4",
    title: "Nautica",
    desc: "Solid Polo Collar T-shirt",
    imgUrl: "",
    price: 320,
    availableQuantity: 10,
  },
  {
    id: "5",
    title: "Allen Solly Sport",
    desc: "Colourblocked Polo Collar T-shirt",
    imgUrl: "",
    price: 320,
    availableQuantity: 10,
  },
];

function Products(props) {
  return (
    <div className="products-container">
      <section className="filter-container">
        <FilterComponent />
      </section>
      <section className="results-container">
        <ResultsComponent results={displayData} />
      </section>
      <section className="cart-container">
        <CartComponent />
      </section>
    </div>
  );
}

export default Products;
