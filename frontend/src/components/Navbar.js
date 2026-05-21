import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div>

            <h2>E-Commerce App</h2>

            <Link to="/">Home</Link>

            <br /><br />

            <Link to="/login">Login</Link>

            <br /><br />

            <Link to="/register">Register</Link>

            <br /><br />

            <Link to="/cart">Cart</Link>

            <br /><br />

            <Link to="/checkout">Checkout</Link>

            <hr />

        </div>
    );
}

export default Navbar;