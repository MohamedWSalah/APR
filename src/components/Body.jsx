import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Body() {
  const classes = useStyles();

  const faculties = [
    "Computer Science",
    "Political Science",
    "Business Administration",
  ];
  const programTitles = ["Example 1", "Example 2", "Example 3"];
  const year = ["16", "17", "18"];

  const [faculty, setFaculty] = useState("");
  const [programTitle, setprogramTitle] = useState("");
  const [AYStartEnd, setAYStartEnd] = useState({ start: "", end: "" });
  return (
    <div className={classes.root} style={{ marginTop: "1vw" }}>
      <TextField
        select
        label="Faculty"
        value={faculty}
        onChange={(event) => setFaculty(event.target.value)}
      >
        {faculties.map((faculty) => (
          <MenuItem key={faculty} value={faculty}>
            {faculty}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Program title"
        value={programTitle}
        onChange={(event) => setprogramTitle(event.target.value)}
      >
        {programTitles.map((programTitle) => (
          <MenuItem key={programTitle} value={programTitle}>
            {programTitle}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Academic Year Start"
        value={AYStartEnd.start}
        onChange={(event) =>
          setAYStartEnd({ ...AYStartEnd, start: event.target.value })
        }
      >
        {year.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Program title"
        value={AYStartEnd.end}
        onChange={(event) =>
          setAYStartEnd({ ...AYStartEnd, end: event.target.value })
        }
      >
        {year.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default Body;
