/*import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{ backgroundColor: "white", p: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img
              style={{ width: "200px", color: "black" }}
              src={""}
              alt="logo"
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img
              style={{ width: "200px", color: "black" }}
              src={""}
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  component={Link}
                  to={page.path}
                  key={index}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 3,
            }}
          >
            {pages.map((page, index) => (
              <Button
                component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#353543",
                  display: "block",
                  fontWeight: "600",
                  fontSize: "16px",
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;*/
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../Assets/Images/logo.png"

const pages = [
  { title: "Home", path: "/", icon: <HomeIcon sx={{ mr: 1 }} /> },
  { title: "About", path: "/about", icon: <InfoIcon sx={{ mr: 1 }} /> },
  { title: "Shop", path: "/shop", icon: <ShoppingCartIcon sx={{ mr: 1 }} /> },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={2} sx={{ backgroundColor: "#f8f9fa", p: 2, borderRadius: "10px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "70px", width: "70px", objectFit: "contain", borderRadius: "10px" }}
            />
          </Box>
          
          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem component={Link} to={page.path} key={index} onClick={handleCloseNavMenu}>
                  {page.icon}
                  <Typography sx={{ textAlign: "center", color: "#333" }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: 3 }}>
            {pages.map((page, index) => (
              <Button
                component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#555",
                  fontWeight: "600",
                  fontSize: "16px",
                  textTransform: "none",
                  borderRadius: "20px",
                  backgroundColor: "#e9ecef",
                  px: 3,
                  '&:hover': {
                    backgroundColor: "#dee2e6"
                  },
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {page.icon}
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;