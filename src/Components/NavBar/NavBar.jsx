import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-start",

  backgroundColor: "white",
  gap: "17px",
});

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f3f3f3",
  borderRadius: "15px",
  border: "1px solid",

  gap: "25px",

  width: "35%",
}));

const NavBar = React.memo(() => {
  const theme = useTheme()
  return (
    <AppBar>
      <StyledToolBar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AcUnitIcon
            sx={{
              color: "black",
              backgroundColor: "#3e8bf5",
              padding: "26px",
              marginLeft: "-25px",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "black",
              backgroundColor: "#3e8bf5",
              padding: "22px",
              marginLeft: "-25px",
            }}
          >
            REFAPEDIA
          </Typography>
        </Box>
        <Typography
          variant="h3"
          sx={{
            display: { xs: "none", md: "flex" },
            color: "black",
            fontSize: "22px",
            gap: "10px",
            fontWeight: "bold",
          }}
        >
          <Link to="/patientdetails" style={{textDecoration:"none", color:"black"}}>Patient Search</Link>
        </Typography>
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Search>
            <SearchIcon
              sx={{
                color: "black",
                padding: "4px",
                paddingLeft: "15px",
                display: { xs: "block", sm: "block" },
              }}
            />
            <InputBase
              placeholder="Name Search.."
              sx={{
                paddingLeft: "1px",
                display: { xs: "none", sm: "block", md: "block" },
              }}
            />
          </Search>
          <Search>
            <SearchIcon
              sx={{
                color: "black",
                padding: "4px",
                paddingLeft: "15px",
                display: { xs: "block", sm: "block" },
              }}
            />
            <InputBase
              placeholder="MRN Search.."
              sx={{
                paddingLeft: "1px",
                display: { xs: "none", sm: "block", md: "block" },
              }}
            />
          </Search>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg:"block"
            },
          }}
        >
          <li>
            <Link
              to="/old"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
              }}
            >
              OLD
            </Link>
          </li>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px ",
            paddingLeft: "35px",
            [theme.breakpoints.down("sm")]:{
              gap:"1px",
              paddingLeft:"0px"
            }
            
          }}
        >
          <PersonIcon
            sx={{ color: "#2d9dc9", width: "40px", height: "40px" }}
          />
          <Typography
            variant="h5"
            sx={{
              color: "black",
              fontSize: "20px",
              gap: "10px",
              display: { xs: "none", md: "flex" },
            }}
          >
            Karan Yale
          </Typography>
          <Badge
            badgeContent={17}
            color="error"
            sx={{ display: "flex", gap: "10px",[theme.breakpoints.up("xs")]:{
              gap:"1px"
            } }}
          >
            <NotificationsIcon
              sx={{ color: "black", fontSize: "2.0rem", paddingLeft: "25px", }}
            />
          </Badge>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
});

export default NavBar;
