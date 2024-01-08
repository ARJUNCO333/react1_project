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

import styled from "@emotion/styled";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-start",
  margin: "0px",
  backgroundColor: "white",
  gap: "30px",
  paddingLeft: "0px",
  paddingRight: "2px",
});

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f3f3f3",
  borderRadius: "15px",
  border: "1px solid",
  borderColor: "",
  gap: "30px",

  width: "35%",
}));

function NavBar() {

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
            color: "black",
            fontSize: "22px",
            gap: "10px",
            fontWeight: "bold",
          }}
        >
          Patient Search
        </Typography>
        <Box sx={{ display: "flex", gap: "30px" }}>
          <Search>
            <SearchIcon
              sx={{ color: "black", padding: "4px", paddingLeft: "15px" }}
            />
            <InputBase
              placeholder="Name Search.."
              sx={{ paddingLeft: "5px" }}
            />
          </Search>
          <Search>
            <SearchIcon
              sx={{ color: "black", padding: "4px", paddingLeft: "15px" }}
            />
            <InputBase placeholder="MRN Search.." sx={{ paddingLeft: "1px" }} />
          </Search>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px   ",
            paddingLeft: "35px",
          }}
        >
          <PersonIcon
            sx={{ color: "#2d9dc9", width: "40px", height: "40px" }}
          />
          <Typography
            variant="h5"
            sx={{ color: "black", fontSize: "20px", gap: "10px" }}
          >
            Karan Yale
          </Typography>
          <Badge
            badgeContent={17}
            color="error"
            sx={{ display: "flex", gap: "15px" }}
          >
            <NotificationsIcon
              sx={{ color: "black", fontSize: "2.0rem", paddingLeft: "25px" }}
            />
          </Badge>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
}

export default NavBar;
