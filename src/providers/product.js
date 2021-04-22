import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function useProductService() {
    return useContext(ProductContext);
}

const ProductProvider = (props) => {
    const [cartData, setCartData] = useState([]);

    const value = {
        cartData,
        setCartData
    }

    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;