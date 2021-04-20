import CartComponent from "../../containers/Cart";
import FilterComponent from "../../containers/Filter";
import ResultsComponent from "../../containers/Results";
import displayData from "../../assets/mock";
import ProductProvider from "../../providers/product";

function Products(props) {
  return (
    <ProductProvider>
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
    </ProductProvider>
  );
}

export default Products;
