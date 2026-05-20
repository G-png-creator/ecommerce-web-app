import "../App.css";
import { useState } from "react";

function Home() {

    const [cart, setCart] = useState([]);

    const products = [

        {
            id:1,
            name:"Wireless Headphones",
            price:"₹2,999",
            image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
        },

        {
            id:2,
            name:"Smart Watch",
            price:"₹4,499",
            image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        },

        {
            id:3,
            name:"Gaming Mouse",
            price:"₹1,499",
            image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
        },

        {
            id:4,
            name:"Laptop",
            price:"₹59,999",
            image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        },

        {
            id:5,
            name:"iPhone 15 Pro",
            price:"₹1,29,999",
            image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },

        {
            id:6,
            name:"Bluetooth Speaker",
            price:"₹3,299",
            image:"https://images.unsplash.com/photo-1589003077984-894e133dabab"
        },
        {
            id:7,
            name:"DSLR Camera",
            price:"₹74,999",
            image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
        },

        {
            id:8,
            name:"Nike Shoes",
            price:"₹5,999",
            image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        }

    ];

    // Add To Cart
    const addToCart = (product) => {

        setCart([...cart, product]);

    };

    return (

        <div className="home">

            {/* Navbar */}
            <nav className="navbar">

                <h1>Ritisha's Hub 🛍️</h1>

                <div className="nav-links">

                    <a href="/">Home</a>
                    <a href="/">Products</a>

                    <div className="cart-icon">
                        🛒 Cart ({cart.length})
                    </div>

                </div>

            </nav>

            {/* Hero */}
            <div className="hero">

                <div className="hero-content">

                    <h1>
                        Style Meets Technology 💎 🛒
                    </h1>

                    <p>
                                       Your one-stop destination for trendy fashion,electronics and premium accessories.
                    </p>

                    <button>
                        Shop Now
                    </button>

                </div>

            </div>

            {/* Products */}
            <div className="products-section">

                <h2>
                    Trending Products 🔥
                </h2>

                <div className="products-grid">

                    {products.map((product) => (

                        <div className="product-card" key={product.id}>

                            <img
                            src={product.image}
                            alt={product.name}
                            />

                            <h3>
                                {product.name}
                            </h3>

                            <p>
                                {product.price}
                            </p>

                            <button
                            onClick={() => addToCart(product)}
                            >
                                Add To Cart
                            </button>

                        </div>

                    ))}

                </div>

            </div>

            {/* Cart Section */}
            <div className="cart-section">

                <h2>
                    Shopping Cart 🛒
                </h2>

                {cart.length === 0 ? (

                    <p className="empty-cart">
                        No products added yet.
                    </p>

                ) : (

                    cart.map((item, index) => (

                        <div className="cart-item" key={index}>

                            <img
                            src={item.image}
                            alt={item.name}
                            />

                            <div>

                                <h3>{item.name}</h3>

                                <p>{item.price}</p>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>

    );
}

export default Home;