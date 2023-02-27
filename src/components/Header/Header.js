import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <StorefrontIcon fontSize="large" className="header-logo-img" />
        <h1 className="header-title">eShop</h1>
      </div>
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-itemLineOne">Hello Guest</span>
          <span className="nav-itemLineTwo">Sign In</span>
        </div>
        <div className="nav-item">
          <span className="nav-itemLineOne">Your</span>
          <span className="nav-itemLineTwo">Shop</span>
        </div>
        <div className="nav-item">
          <ShoppingBasketIcon className="nav-item-basket" />
          <span className="nav-itemLineTwo nav-basket-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
