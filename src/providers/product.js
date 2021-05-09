import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function useProductService() {
    return useContext(ProductContext);
}

const ProductProvider = (props) => {
    const [cartData, setCartData] = useState([]);
    const [productList, setProductList] = useState([]);

    const value = {
        cartData,
        setCartData,
        productList,
        setProductList
    }

    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;