import CartComponent from "../../containers/Cart";
import FilterComponent from "../../containers/Filter";
import ResultsComponent from "../../containers/Results";
import displayData from "../../assets/mock";
import ProductProvider from "../../providers/product";
import SearchBarComponent from "../../components/SearchBar";
import { Typography } from "@material-ui/core";

function Products(props) {
  return (
    <ProductProvider>
      <div className="products-container">
        <section className="filter-wrapper">
          <FilterComponent results={displayData} />
        </section>
        <section className="results-wrapper">
          <div className="search-bar">
            <Typography variant="subtitle1">Men's T Shirts
            <span className="product-subtitle">(Showing 1 – 40 products of 84,131 products)</span></Typography>
            <SearchBarComponent></SearchBarComponent>
          </div>
          <section className="results-container">
            <ResultsComponent />
          </section>
        </section>
        <section className="cart-container">
          <CartComponent />
        </section>
      </div>
    </ProductProvider>
  );
}

export default Products;
