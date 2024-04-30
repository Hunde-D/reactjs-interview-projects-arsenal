import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./dataLoader-styles.css";
export default function DataLoader({ url, limit }) {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (count > Math.floor(100 / limit)) setCount(0);
        let response = await fetch(
          `${url}?limit=${limit}&skip=${count === 0 ? 0 : count * limit}`
        );
        let data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [url, count]);

  return (
    <div className="loader-wrapper">
      <h1>P5.Products 👓👟📱💻 Loader</h1>
      <div className="products">
        {products.length > 0
          ? products.map((product) => {
              console.log(count);
              return (
                <div key={product.id} className="product">
                  <img src={product.thumbnail} alt={product.title} />
                  <h5 className="product-info">{product.title}</h5>
                  <p className="product-info">${product.price}</p>
                </div>
              );
            })
          : "No products found!"}
      </div>
      {count === Math.floor(100 / limit) && (
        <p> you have reached the last page back to top</p>
      )}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count < Math.ceil(100 / limit) ? "Load More" : "Back"}
      </button>
    </div>
  );
}
DataLoader.propTypes = {
  url: PropTypes.string,
  limit: PropTypes.string,
  skip: PropTypes.string,
};
