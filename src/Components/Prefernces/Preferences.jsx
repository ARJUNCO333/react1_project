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
import { useTheme } from "@emotion/react";

const Preferences = () => {
  const theme = useTheme();
  const defaultValue = 0;
  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "rgb(158, 179, 226)",
        width: "33%",
        Width: "430px",
        height: "300px",
        [theme.breakpoints.only("xs")]: {
          width: "90%",
          height: "330px",
        },
        [theme.breakpoints.only("sm")]: {
          width: "80%",
          height: "330px",
        },
        [theme.breakpoints.only("md")]: {
          width: "60%",
          height: "330px",
        },
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
          sx={{
            margin: "3px",
            marginLeft: "15px",
            fontWeight: "bold",
            [theme.breakpoints.only("xs")]: {
              marginLeft: "7px",
              fontSize: "15px",
            },
            [theme.breakpoints.only("sm")]: {
              marginLeft: "15px",
              fontSize: "15px",
            },
          }}
        >
          Insurance :
        </Typography>
        <FormControl
          size="small"
          sx={{
            width: "300px",
            backgroundColor: "white",
            marginLeft: "28px",
            [theme.breakpoints.only("xs")]: {
              width: "150px",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="insurance"
            defaultValue={defaultValue}
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
      <Box sx={{ display: "flex", alignItems: "center", paddingTop: "15px" }}>
        <Typography
          variant="p"
          sx={{
            margin: "3px",
            marginLeft: "15px",
            fontWeight: "bold",
            [theme.breakpoints.only("xs")]: {
              marginLeft: "7px",
              fontSize: "15px",
            },
            [theme.breakpoints.only("sm")]: {
              marginLeft: "15px",
              fontSize: "15px",
            },
          }}
        >
          Language :
        </Typography>
        <FormControl
          size="small"
          sx={{
            width: "300px",
            backgroundColor: "white",
            marginLeft: "26px",
            [theme.breakpoints.only("xs")]: {
              width: "150px",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="language"
            defaultValue={defaultValue}
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
      <Box sx={{ display: "flex", alignItems: "center", paddingTop: "15px" }}>
        <Typography
          variant="p"
          sx={{
            margin: "3px",
            marginLeft: "15px",
            fontWeight: "bold",
            [theme.breakpoints.only("xs")]: {
              marginLeft: "7px",
              fontSize: "15px",
            },
            [theme.breakpoints.only("sm")]: {
              marginLeft: "15px",
              fontSize: "15px",
            },
          }}
        >
          Orientation :
        </Typography>
        <FormControl
          size="small"
          sx={{
            width: "300px",
            backgroundColor: "white",
            marginLeft: "15px",
            [theme.breakpoints.only("xs")]: {
              width: "150px",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="orientation"
            defaultValue={defaultValue}
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
      <Box sx={{ display: "flex", alignItems: "center", paddingTop: "15px" }}>
        <Typography
          variant="p"
          sx={{
            margin: "3px",
            marginLeft: "15px",
            fontWeight: "bold",
            [theme.breakpoints.only("xs")]: {
              marginLeft: "7px",
              fontSize: "15px",
            },
            [theme.breakpoints.only("sm")]: {
              marginLeft: "15px",
              fontSize: "15px",
            },
          }}
        >
          Special Needs :
        </Typography>
        <FormControl
          size="small"
          sx={{
            width: "300px",
            backgroundColor: "white",
            marginLeft: "0px",
            [theme.breakpoints.only("xs")]: {
              width: "150px",
            },
          }}
        >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="specialneeds"
            defaultValue={defaultValue}
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
