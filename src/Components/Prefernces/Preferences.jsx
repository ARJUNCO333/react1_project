import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import React from "react";
import { useState } from "react";

const Preferences = () => {
  
    const [insurance, setInsurance] = useState(0);
    const [language, setLanguage] = useState(0);
    const [orientation, setOrientation] = useState(0);
    const [specialNeeds, setSpecialNeeds] = useState(0);
  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "rgb(158, 179, 226)",
        width: "33%",
        Width: "430px",
        height: "300px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AssignmentIndIcon
          sx={{ marginLeft: "5px", paddingLeft: "15px", paddingTop: "20px" }}
        />
        <Typography variant="h5" sx={{ marginLeft: "5px", paddingTop: "20px" }}>
          Preferences
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", paddingTop: "15px" }}>
        <Typography
          variant="p"
          sx={{ margin: "3px", marginLeft: "15px", fontWeight: "bold" }}
        >
          Insurance :
        </Typography>
        <FormControl
          size="small"
          sx={{ width: "300px", backgroundColor: "white",marginLeft:"28px" }}
        >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="insurance"
            value={insurance}
            onChange={(event) => setInsurance(event.target.value)}
          >
            <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
            
            <MenuItem value={10}>None</MenuItem>
            <MenuItem value={20}>Medicare2</MenuItem>
            <MenuItem value={30}>Medicare3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", paddingTop: "15px" }}>
        <Typography
          variant="p"
          sx={{ margin: "3px", marginLeft: "15px", fontWeight: "bold" }}
        >
          Language :
        </Typography>
        <FormControl
          size="small"
          sx={{ width: "300px", backgroundColor: "white",marginLeft:"26px" }}
        >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
            <MenuItem value={10}>None</MenuItem>
            <MenuItem value={20}>Medicare2</MenuItem>
            <MenuItem value={30}>Medicare3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" ,paddingTop:"15px"}}>
        <Typography variant="p"  sx={{ margin: "3px", marginLeft: "15px" ,fontWeight:"bold"}}>
          Orientation :
        </Typography>
        <FormControl size="small"  sx={{width:"300px",backgroundColor:"white",marginLeft:"15px"}}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
            label="orientation"
            value={orientation}
            onChange={(event) => setOrientation(event.target.value)}
            
          >
            <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
            
            <MenuItem value={10}>None</MenuItem>
            <MenuItem value={20}>Medicare2</MenuItem>
            <MenuItem value={30}>Medicare3</MenuItem>
          </Select>
        </FormControl>
        
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" ,paddingTop:"15px"}}>
        <Typography variant="p"  sx={{ margin: "3px", marginLeft: "15px" ,fontWeight:"bold"}}>
          Special Needs :
        </Typography>
        <FormControl size="small"  sx={{width:"300px",backgroundColor:"white",marginLeft:"0px"}}>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
            label="specialneeds"
            value={specialNeeds}
            onChange={(event) => setSpecialNeeds(event.target.value)}
            
          >
            <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
            <MenuItem value={10}>Medicare1</MenuItem>
            <MenuItem value={20}>Medicare2</MenuItem>
            <MenuItem value={30}>Medicare3</MenuItem>
          </Select>
        </FormControl>
        
      </Box>
    </Box>
  );
};

export default Preferences;
