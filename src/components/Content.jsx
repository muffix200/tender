import React, { useContext } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
} from "@mui/material";
import Table from "./Table";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import visaImg from "../assets/images/visa.jpg";
import { themeContext } from "../App";
export default function Content() {
  const { isDark } = useContext(themeContext);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.main",
        // maxHeight: "100vh",
        // minHeight: "100vh",
      }}
    >
      <div className="big-screen">
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Subscription
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 1,
            mt: 1,
            opacity: 0.8,
            fontWeight: 400,
            color: "text.default",
            width: "90%",
          }}
        >
          Manage your billing information and invoices
        </Typography>
        <div className="box-wrapper">
          <div className="box-wrapper__div">
            <Paper
              variant="outlined"
              sx={{
                padding: "20px",
                backgroundColor: "background.secondary",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        mb: 1,
                        mt: 1,
                        opacity: 1,
                        fontWeight: 500,
                      }}
                    >
                      Pro
                    </Typography>
                    <Chip
                      label="Current Plan"
                      sx={{
                        borderRadius: "5px",
                        height: "25px",
                        marginLeft: "10px",
                        border: "1px solid #4baac9",
                        color: "#4baac9",
                        background: "rgba(255,255,255,0.1)",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mb: 1,
                      mt: 1,
                      opacity: 1,
                      fontWeight: 400,
                      opacity: 0.8,
                      color: "text.default",
                    }}
                  >
                    You are currently on the pro plan
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 1,
                    mt: 1,
                    opacity: 1,
                    fontWeight: 500,
                    opacity: 1,
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  $25
                  <Typography sx={{ color: "text.default", opacity: 0.8 }}>
                    /month
                  </Typography>
                </Typography>
              </Box>
              <Divider sx={{ mb: 2, mt: 2, width: "100%" }} />
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingLeft: "3px",
                  color: "#ed7415",
                  fontSize: "13px !important",
                }}
                variant="none"
                endIcon={<ArrowForwardRoundedIcon />}
              >
                Upgrade Plans
              </Button>
            </Paper>
            <Paper
              variant="outlined"
              sx={{
                padding: "20px",
                backgroundColor: "background.secondary",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 1,
                  mt: 1,
                  opacity: 1,
                  fontWeight: 500,
                }}
              >
                Payment method
              </Typography>
              <Box
                sx={{
                  backgroundColor: "background.default",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={visaImg} alt="err" className="visa-img" />
                  <Typography
                    sx={{
                      mb: 1,
                      mt: 1,
                      opacity: 1,
                      fontWeight: 400,
                    }}
                  >
                    Visa **** 6546
                    <Typography
                      sx={{
                        opacity: 1,
                        fontWeight: 400,
                        color: "text.default",
                        opacity: 0.8,
                      }}
                    >
                      Expiry 03/25
                    </Typography>
                  </Typography>
                </Box>
                <Button
                  sx={{
                    width: "70px",
                    height: "30px",
                    borderRadius: "10px",
                    fontSize: "11px",
                    backgroundColor: isDark ? "#212530" : "#f6f6f6",
                    border: isDark
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Paper>
          </div>
          <Paper
            sx={{
              padding: "20px",
              backgroundColor: "background.secondary",
              borderRadius: "10px",
            }}
            variant="outlined"
          >
            <Typography
              sx={{
                mb: 1,
                mt: 1,
                opacity: 1,
                fontWeight: 500,
              }}
            >
              Subscription Usage
            </Typography>
            <Typography
              sx={{
                mb: 1,
                mt: 1,
                opacity: 1,
                fontWeight: 400,
              }}
            >
              <Typography
                sx={{
                  color: "text.default",
                  display: "inline-block",
                  mr: 0.5,
                  opacity: 0.9,
                }}
              >
                Total logs ingested:
              </Typography>
              32917.63 MB
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                opacity: 1,
                fontWeight: 400,
              }}
            >
              <Typography
                sx={{
                  color: "text.default",
                  display: "inline-block",
                  mr: 0.5,
                  opacity: 0.8,
                }}
              >
                Total Lambda executions:
              </Typography>
              1.3mil
            </Typography>
          </Paper>
        </div>
      </div>
      <Divider sx={{ mt: 5, width: "100%" }} />
      <div className="big-screen2">
        <Table />
      </div>
    </Box>
  );
}
