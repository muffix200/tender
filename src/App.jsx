import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
export const themeContext = createContext(null);
const drawerWidth = 300;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const light = {
    typography: {
      body1: {
        fontSize: 14,
      },
    },
    palette: {
      mode: "light",
      background: {
        default: "#fff",
        main: "#EEE",
      },
      primary: {
        main: "#191919",
      },
      text: {
        default: "#666",
        primary: "#000",
        secondary: "#999",
      },
    },
  };
  const dark = {
    typography: {
      body1: {
        fontSize: 14,
      },
    },
    palette: {
      mode: "dark",
      background: {
        default: "#212530",
        main: "#101218",
        secondary: "#191c24",
      },
      primary: {
        main: "#ffff",
      },
      text: {
        default: "#929ab5",
        primary: "#f6f6f6",
        secondary: "#4f5874",
      },
    },
  };
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <themeContext.Provider
      value={{
        func: setIsDarkTheme,
        isDark: isDarkTheme,
        closeFunc: setMobileOpen,
      }}
    >
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <Box
          sx={{
            position: "fixed",
            top: "10px",
            right: "15px",
            zIndex: 101,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            onClick={() => setIsDarkTheme((e) => !e)}
            sx={{
              display: { xs: "none", lg: "flex" },
              backgroundColor: isDarkTheme
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton
            onClick={() => setMobileOpen((e) => !e)}
            sx={{
              display: { md: "inherit", lg: "none" },
              backgroundColor: isDarkTheme
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.1)",
            }}
          >
            {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </IconButton>
        </Box>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Box
            component="nav"
            sx={{
              width: { lg: drawerWidth },
              flexShrink: { sm: 0 },
            }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {<Sidebar />}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", lg: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  backgroundColor: "background.default",
                },
              }}
              open
            >
              {<Sidebar />}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              // width: "100%",
              minHeight: "100vh",
              backgroundColor: "background.main",
              overflow: "auto",
            }}
          >
            <Content />
          </Box>
        </Box>
      </ThemeProvider>
    </themeContext.Provider>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
