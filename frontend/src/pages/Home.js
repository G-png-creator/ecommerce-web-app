import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/products"
            );

            setProducts(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const addToCart = (product) => {

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert("Product Added To Cart");
    };

    return (

        <div style={{ padding: "20px" }}>

            <h1>Products</h1>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px"
                }}
            >

                {
                    products.map((product) => (

                        <div
                            key={product.id}
                            style={{
                                border: "1px solid black",
                                padding: "20px",
                                width: "250px"
                            }}
                        >

                            <h2>{product.name}</h2>

                            <p>{product.description}</p>

                            <h3>₹ {product.price}</h3>

                            <button
                                onClick={() => addToCart(product)}
                            >
                                Add To Cart
                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Home;