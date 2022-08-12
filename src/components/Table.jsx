import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { themeContext } from "../App";
function createData(name, f1, f2, f3, f4) {
  return { name, f1, f2, f3, f4 };
}
const rows = [
  createData("Invoice #001", "June 1,2022", "Paid", "Pro Plan", "$25.00"),
  createData("Invoice #002", "June 1,2022", "Paid", "Pro Plan", "$25.00"),
];
export default function CustomizedTables() {
  const { isDark } = React.useContext(themeContext);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.background.main,
      opacity: 1,
      borderBottom: isDark
        ? "1px solid  rgba(255,255,255,0.1)"
        : "1px solid  rgba(0,0,0,0.1)",
      color: isDark ? "#929ab5" : "#555",
      fontWeight: 400,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      backgroundColor: theme.palette.background.main,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:last-child td, &:last-child th": {
      border: "none",
    },
    "& td, & th": {
      borderBottom: isDark
        ? "1px solid  rgba(255,255,255,0.1)"
        : "1px solid  rgba(0,0,0,0.1)",
    },
  }));
  return (
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>INVOICE</StyledTableCell>
            <StyledTableCell align="right">BILLING DATE</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
            <StyledTableCell align="right">PLAN</StyledTableCell>
            <StyledTableCell align="right">AMOUNT</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.f1}</StyledTableCell>
              <StyledTableCell align="right">{row.f2}</StyledTableCell>
              <StyledTableCell align="right">{row.f3}</StyledTableCell>
              <StyledTableCell align="right">{row.f4}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  sx={{
                    width: "95px",
                    height: "35px",
                    fontSize: "13px !important",
                    borderRadius: "10px",
                    backgroundColor: "background.default",
                    color: "text.primary",
                    fontWeight: "400",
                    filter: "brightness(1.1)",
                  }}
                >
                  Download
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
