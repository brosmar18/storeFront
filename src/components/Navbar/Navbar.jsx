import { useState } from "react";
import { navLowLinks, navTopLinks } from "../../constants";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MonitorIcon from "@mui/icons-material/Monitor";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.scss";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.items.length);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        backgroundColor: "var(--primary-color)",
        color: "#fff",
        height: "100vh",
        paddingTop: "50px",
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={toggleDrawer(false)}
        style={{ position: "absolute", right: 8, top: 8 }}
        sx={{ color: "white" }}
      >
        <CloseIcon />
      </IconButton>
      <List>
        {navLowLinks.map((item) => (
          <ListItem key={`mobile-nav-${item.label}`}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <MonitorIcon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="nav">
      <div className="nav__top">
        <div className="nav__top-links">
          {navTopLinks.map((link, index) => (
            <a key={`nav-top-${index}`} href={link.route}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav__top-btn">
          <p>⭐️ Experience OffGamers New Theme</p>
          <button className="button">Shop Now</button>
        </div>
      </div>
      <div className="nav__low">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="nav__low-links">
          {navLowLinks.map((item, index) => (
            <div key={`nav-low-${index}`} className="nav__low-link">
              <MonitorIcon />
              <Link to={item.route}>{item.label}</Link>
            </div>
          ))}
        </div>
        <div className="nav__low-icons">
          <SearchIcon />
          <div className="shopping">
            <p>${totalPrice?.toFixed(2) ?? "0.00"}</p>
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </div>
          <div className="sign-in">
            <AccountCircleIcon />
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>
      <div className="nav__mobile">
        <Button onClick={toggleDrawer(true)} sx={{ color: "white" }}>
          <MenuIcon />
        </Button>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
