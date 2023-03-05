import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <nav>
          <ul className="navList">
            <li><a href="/">Home</a></li>
            <li><Link to="/robots">Robots</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/carts">Carts</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/quotes">Quotes</Link></li>
          </ul>
        </nav>
      </header>
    )
}
export default Header;