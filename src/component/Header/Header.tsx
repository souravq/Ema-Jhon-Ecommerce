import "./Header.css";
import logo from "../../assets/images/Logo.svg";
export default function Header() {
  return (
    <div>
        <div className="navbar">
            <img src={logo} alt="Logo"/>
            <div className="navbar-route">
                <a href="./order">Order</a>
                <a href="./order-review">Order Rivew</a>
                <a href="./manage-inventory">Manage Inventory</a>
                <a href="./login">Login</a>
            </div>
        </div>

    </div>
  )
}
