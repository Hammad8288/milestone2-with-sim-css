import React from "react";
import "../Styles/Watches.css"; // Adjust the path based on your folder structure

const Page = () => {
  const products = [
    {
      id: 1,
      name: "Rolex",
      price: 199.99,
      description: "Luxury watch",
      image: "/product1.jpg",
    },
    {
      id: 2,
      name: "Omega",
      price: 299.99,
      description: "Sporty design",
      image: "/product2.jpg",
    },
    {
      id: 3,
      name: "Patek Philippe",
      price: 399.99,
      description: "Elegant timepiece",
      image: "/product3.jpg",
    },
    {
      id: 4,
      name: "TAG Heuer",
      price: 499.99,
      description: "Sporty and stylish",
      image: "/product4.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: 599.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product2.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: 699.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product4.jpg",
    },
    {
      id: 7,
      name: "Product 7",
      price: 799.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product1.jpg",
    },
    {
      id: 8,
      name: "Product 8",
      price: 899.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product3.jpg",
    },
    {
      id: 9,
      name: "Product 9",
      price: 999.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product4.jpg",
    },
    {
      id: 10,
      name: "Product 10",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product3.jpg",
    },
    {
      id: 11,
      name: "Product 11",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product1.jpg",
    },
    {
      id: 12,
      name: "Product 12",
      price: 1099.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/product4.jpg",
    },
  ];

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
