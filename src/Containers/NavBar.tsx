import * as React from "react";
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
import logoImg from "../assets/images/luzbakerylogo.png";
import { Link, NavLink } from "react-router-dom";

const pages = [
  { name: "Inicio", link: "inicio" },
  { name: "Productos", link: "productos" },
  { name: "Contacto", link: "contacto" },
];
const pagesLink = ["inicio", "productos", "quienessomos", "contacto"];

const settings = ["Prosdasdafile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        {pages.map((page) => (
          <NavLink
            to={`/${page.link}`}
            key={page.name}
            onClick={handleCloseNavMenu}
            style={{
              color: "white",
              display: "block",
              marginRight: "25px",
              textDecoration: "none",
            }}
          >
            <Typography style={{ fontSize: "25px" }}> {page.name} </Typography>
          </NavLink>
        ))}
      </Box>
      <Typography>Los Manjares de Luz</Typography>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Los Manjares de Luz">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <img
              style={{
                width: "275px",
                height: "275px",
                borderRadius: "50%",
                border: "5px solid white",
              }}
              alt="manjares de luz "
              src={logoImg}
            />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Logo Icon*/}
    </Container>
  );
};
export default ResponsiveAppBar;
