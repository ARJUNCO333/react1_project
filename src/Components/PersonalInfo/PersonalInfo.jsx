import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PersonalInfo = () => {
  return (
    <Box
      bgcolor="rgb(158, 179, 226)"
      sx={{
        paddingTop: "100px",
        width: "33%",
        Width: "430px",
        height: "330px",
        paddingBottom:"0px",
        
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AccountCircleIcon sx={{ marginLeft: "5px", paddingLeft: "15px" }} />
        <Typography variant="h5" sx={{ marginLeft: "5px" }}>
          Personal Info
        </Typography>
      </Box>
      <Box sx={{ display: "flex", paddingLeft: "40px" ,paddingTop:""}}>
        <Box sx={{ width: "200px" }}>
          <TextField
            id="outlined-size-small"
            placeholder="Last Name"
            size="small"
            sx={{ backgroundColor: "white", margin: "15px" }}
          />
        </Box>
        <Box sx={{ width: "200px" }}>
          <TextField
            id="outlined-size-small"
            placeholder="First Name"
            size="small"
            sx={{ backgroundColor: "white", margin: "15px" }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex",paddingLeft: "40px" }}>
        <Box sx={{ width: "200px" }}>
          <TextField
            id="outlined-size-small"
            placeholder="Age"
            size="small"
            sx={{ backgroundColor: "white", margin: "15px" }}
          />
        </Box>
        <Box sx={{ width: "200px" }}>
          <TextField
            id="outlined-size-small"
            placeholder="Gender"
            size="small"
            sx={{ backgroundColor: "white", margin: "15px" }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex",paddingLeft: "40px" }}>
        <Box sx={{ width: "200px" }}>
          <TextField
            id="outlined-size-small"
            placeholder=" Name"
            size="small"
            sx={{ backgroundColor: "white", margin: "15px" }}
          />
        </Box>
        </Box>
      <Box sx={{ display: "flex",paddingLeft: "40px" }}>
        <Box sx={{ width: "200px" }}>
          <TextField
            id="outlined-size-small"
            placeholder="Street Name"
            size="small"
            sx={{ backgroundColor: "white", margin: "15px" }}
          />
        </Box>
        <Box sx={{ width: "200px" }}>
          <TextField
            id="outlined-size-small"
            
            placeholder="Town"
            size="small"
            sx={{ backgroundColor: "white", margin: "15px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
