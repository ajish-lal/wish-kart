import CartComponent from "../../containers/Cart";
import FilterComponent from "../../containers/Filter";
import ResultsComponent from "../../containers/Results";

function Products(props) {

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '15%' }}>
                <FilterComponent />
            </div>
            <div style={{ width: '65%' }}>
                <ResultsComponent />
            </div>
            <div style={{ width: '20%' }}>
                <CartComponent />
            </div>
        </div>
    );
}

export default Products;