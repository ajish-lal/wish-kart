import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [cartData, setCartData] = useState([]);

    return (
        <ProductContext.Provider value={[cartData, setCartData]}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;