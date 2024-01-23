import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/material";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);

  const addData = () => {
    if (!fname || !lname || !age || !address) {
      alert("Enter valid values for all fields");
      return;
    }

    if (isNaN(age) || age <= 0) {
      alert("Enter a valid age");
      return;
    }

    const newData = [...data, { fname, lname, age, address }];
    setData(newData);

    setFname("");
    setLname("");
    setAge("");
    setAddress("");
  };

  const removeData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <Box sx={{ marginTop: "50px", marginLeft: "10px" }}>
      <Box sx={{ marginBottom: "10px", paddingLeft: "10px" }}>
        <TextField
          label="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          inputRef={fnameRef}
        />
      </Box>

      <Box sx={{ marginTop: "30px", marginLeft: "10px" }}>
        <TextField
          label="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          inputRef={lnameRef}
        />
      </Box>

      <Box sx={{ marginTop: "30px", marginLeft: "10px" }}>
        <TextField
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          inputRef={ageRef}
        />
      </Box>

      <Box sx={{ marginTop: "30px", marginLeft: "10px", marginBottom: "20px" }}>
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          inputRef={addressRef}
        />
        <Button
          sx={{ marginLeft: "10px", marginTop: "10px" }}
          variant="contained"
          onClick={() => addData()}
        >
          Add
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.fname}</TableCell>
              <TableCell>{row.lname}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.address}</TableCell>

              <TableCell>
                <Button variant="outlined" onClick={() => removeData(index)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableComponent;
