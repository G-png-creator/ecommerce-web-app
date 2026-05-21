import "../App.css";

function Home() {

  const products = [

    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    {
      id: 2,
      name: "Smart Watch",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },

    {
      id: 3,
      name: "Gaming Laptop",
      price: "₹89,999",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    },

    {
      id: 4,
      name: "iPhone 15",
      price: "₹79,999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },

    {
      id: 5,
      name: "Bluetooth Speaker",
      price: "₹3,299",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    },

    {
      id: 6,
      name: "DSLR Camera",
      price: "₹74,999",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },

    {
      id: 7,
      name: "Nike Shoes",
      price: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 8,
      name: "MacBook Pro",
      price: "₹1,29,999",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    }

  ];

  return (

    <div className="home">

      {/* NAVBAR */}

      <nav className="navbar">

        <h1 className="logo">
          Ritisha's Hub 🛍
        </h1>

        <div className="nav-links">

          <a href="/">Home</a>

          <a href="/">Products</a>

          <a href="/">Cart 🛒</a>

          <a href="/">Login</a>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Best Shopping Experience 🛒
          </h1>

          <p>
            Buy trending products at amazing prices.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

        </div>

      </section>

      {/* PRODUCTS SECTION */}

      <section className="products-section">

        <h2 className="section-title">
          Trending Products 🔥
        </h2>

        <div className="product-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="product-content">

                <h3>{product.name}</h3>

                <p className="price">
                  {product.price}
                </p>

                <button
                  className="cart-btn"
                  onClick={() =>
                    alert(
                      `${product.name} added to cart 🛒`
                    )
                  }
                >
                  Add To Cart
                </button>

                <button
                  className="buy-btn"
                  onClick={() =>
                    alert(
                      `Payment Successful for ${product.name} 🎉`
                    )
                  }
                >
                  Buy Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FEATURES */}

      <section className="features-section">

        <h2 className="section-title">
          Why Shop With Us?
        </h2>

        <div className="features-grid">

          <div className="feature-card">

            <h3>🚚 Fast Delivery</h3>

            <p>
              Get your products delivered quickly.
            </p>

          </div>

          <div className="feature-card">

            <h3>💳 Secure Payments</h3>

            <p>
              100% safe and secure payment methods.
            </p>

          </div>

          <div className="feature-card">

            <h3>⭐ Premium Quality</h3>

            <p>
              High-quality products at affordable prices.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        © 2026 Ritisha Store | Built with React 💙

      </footer>

    </div>
  );
}

export default Home;