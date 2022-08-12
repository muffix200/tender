import React, { useContext } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { themeContext } from "../App";

// Icons
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Icons

export default function Sidebar() {
  const { isDark, closeFunc, func } = useContext(themeContext);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        padding: "20px 10px",
        backgroundColor: "background.default",
      }}
    >
      <IconButton
        onClick={() => func((e) => !e)}
        sx={{
          display: { md: "flex", lg: "none" },
          backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          position: "fixed",
          top: "10px",
          left: "250px",
        }}
      >
        {isDark ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
        <IconButton
          onClick={() => {
            closeFunc(false);
          }}
          sx={{
            backgroundColor: isDark ? "#323849" : "#EEE",
            borderRadius: "10px",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ marginLeft: "10px" }} variant="h5">
          Settings
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          paddingLeft: "10px",
          color: "text.secondary",
          fontWeight: 500,
        }}
      >
        ORGANIZATION
      </Typography>
      <List>
        {["Accounts", "Users", "Subscription", "Usage Report"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: "7px",
                  mt: 2,
                  padding: "7px 10px",
                  height: "40px",
                  backgroundColor:
                    index == 2
                      ? isDark
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)"
                      : "none",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  {index === 0 && (
                    <BusinessRoundedIcon
                      sx={{
                        fontSize: "28px",
                        color: "text.default",
                      }}
                    />
                  )}
                  {index === 1 && (
                    <PeopleAltOutlinedIcon
                      sx={{
                        fontSize: "28px",
                        color: "text.default",
                      }}
                    />
                  )}
                  {index === 2 && (
                    <PaymentOutlinedIcon
                      sx={{
                        fontSize: "28px",
                        color: "text.default",
                      }}
                    />
                  )}
                  {index === 3 && (
                    <BarChartRoundedIcon
                      sx={{
                        fontSize: "28px",
                        color: "text.default",
                      }}
                    />
                  )}
                  {index === 4 && (
                    <MarkChatUnreadOutlinedIcon
                      sx={{
                        fontSize: "28px",
                      }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Typography
        variant="subtitle1"
        sx={{
          paddingLeft: "10px",
          mb: 0,
          mt: 2,
          color: "text.secondary",
          fontWeight: 500,
        }}
      >
        ACCOUNT SETTINS
      </Typography>
      <List>
        {["Notifications", "Integrations"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: "7px",
                mt: 2,
                padding: "7px 10px",
                height: "40px",
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {index === 0 && (
                  <NotificationsActiveOutlinedIcon
                    sx={{
                      fontSize: "28px",
                      color: "text.default",
                    }}
                  />
                )}
                {index === 1 && (
                  <ExtensionOutlinedIcon
                    sx={{
                      fontSize: "28px",
                      color: "text.default",
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography
        variant="subtitle1"
        sx={{
          paddingLeft: "10px",
          mb: 1,
          mt: 2,
          color: "text.secondary",
          fontWeight: 500,
        }}
      >
        USER SETTINGS
      </Typography>
      <List>
        {["Profile"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: "7px",
                mt: 1,
                padding: "7px 10px",
                height: "40px",
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {index === 0 && (
                  <AccountCircleOutlinedIcon
                    sx={{
                      fontSize: "28px",
                      color: "text.default",
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
