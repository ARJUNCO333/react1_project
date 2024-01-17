import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useTheme } from "@emotion/react";

const MedicalHistory = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "rgb(158, 179, 226)",
        width: "33%",
        
        height: "400px",
        [theme.breakpoints.only("xs")]: {
          width: "90%",
          height: "300px",
        },
        [theme.breakpoints.only("sm")]: {
          width: "80%",
          height: "300px",
        },
        [theme.breakpoints.only("md")]: {
          width: "60%",
          height: "300px",
        },
      }}
    >
      <Box  sx={{ display: "flex", alignItems: "center" }}>
       <LocalHospitalIcon sx={{ marginLeft: "5px", paddingLeft: "15px", paddingTop: "20px" }}/>
       <Typography variant="h5" sx={{ marginLeft: "5px", paddingTop: "20px" }}>
          Medical History
        </Typography>
      </Box>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '40ch' }, marginLeft:"20px",[theme.breakpoints.only("xs")]:{
          '& .MuiTextField-root': { m: 3, width: '25ch' }
        }
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="outlined-multiline-static"
          
          multiline
          rows={4}
          placeholder="enter medical history"
          sx={{ backgroundColor: "white", margin: "15px", width:"100%",
          [theme.breakpoints.only("xs")]:{
            width:"100%"
          }
         }}
        />
    </Box>
    </Box>
  );
};

export default MedicalHistory;
