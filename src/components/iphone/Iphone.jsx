import { useState, useEffect } from "react";
import { getProductByCategory } from "../../asyncMock.js";
import ItemList from "../itemlist/ItemList";

const Ipad = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByCategory(["Smartphones"])
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="item-container">
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default Ipad;
