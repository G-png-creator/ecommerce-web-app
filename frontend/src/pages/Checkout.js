import { useEffect, useState } from "react";
import axios from "axios";

function Checkout() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        const items =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCartItems(items);

    }, []);

    const totalPrice = cartItems.reduce(
        (total, item) => total + Number(item.price),
        0
    );

    const placeOrder = async () => {

        try {

            await axios.post(
                "http://localhost:5000/api/orders",
                {
                    user_id: 1,
                    total: totalPrice
                }
            );

            alert("Order Placed Successfully");

            localStorage.removeItem("cart");

            window.location.href = "/";

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div style={{ padding: "20px" }}>

            <h1>Checkout</h1>

            {
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

                        <h3>₹ {item.price}</h3>

                    </div>
                ))
            }

            <hr />

            <h2>Total Price: ₹ {totalPrice}</h2>

            <button onClick={placeOrder}>

                Place Order

            </button>

        </div>
    );
}

export default Checkout;