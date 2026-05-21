import { useEffect, useState } from "react";

function Cart() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        const items =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCartItems(items);

    }, []);

    const removeItem = (index) => {

        let updatedCart = [...cartItems];

        updatedCart.splice(index, 1);

        setCartItems(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + Number(item.price),
        0
    );

    return (

        <div style={{ padding: "20px" }}>

            <h1>Cart Page</h1>

            {
                cartItems.length === 0 ? (

                    <h2>Your Cart Is Empty</h2>

                ) : (

                    cartItems.map((item, index) => (

                        <div
                            key={index}
                            style={{
                                border: "1px solid black",
                                padding: "20px",
                                marginBottom: "10px",
                                width: "300px"
                            }}
                        >

                            <h2>{item.name}</h2>

                            <p>{item.description}</p>

                            <h3>₹ {item.price}</h3>

                            <button
                                onClick={() => removeItem(index)}
                            >
                                Remove
                            </button>

                        </div>
                    ))
                )
            }

            <hr />

            <h2>Total Price: ₹ {totalPrice}</h2>

        </div>
    );
}

export default Cart;