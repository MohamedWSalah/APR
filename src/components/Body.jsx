import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DropDownMenu from "./DropDownMenu";
import Tabs from "./Tabs";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  ShowButton: {
    backgroundColor: "#AF0000",
    color: "white",
    marginTop: "2vw",
    marginBottom: "2vw",
    width: "25ch",
    "&:hover": {
      backgroundColor: "#c23636",
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
  const [show, setShow] = useState(false);
  const [requiredInfo, setRequiredInfo] = useState({
    faculty: "",
    programTitle: "",
    AYStart: "",
    AYEnd: "",
  });
  return (
    <div className={classes.root} style={{ marginTop: "1vw" }}>
      <DropDownMenu
        autofocus={true}
        label="Faculty"
        value={requiredInfo.faculty}
        arrayMenu={faculties}
        onChange={(event) =>
          setRequiredInfo({ ...requiredInfo, faculty: event.target.value })
        }
      />

      <DropDownMenu
        label="Program Title"
        value={requiredInfo.programTitle}
        arrayMenu={programTitles}
        disabled={requiredInfo.faculty ? false : true}
        onChange={(event) =>
          setRequiredInfo({
            ...requiredInfo,
            programTitle: event.target.value,
          })
        }
      />

      <DropDownMenu
        label="Academic Year Start"
        value={requiredInfo.AYStart}
        arrayMenu={year}
        disabled={requiredInfo.faculty ? false : true}
        onChange={(event) =>
          setRequiredInfo({
            ...requiredInfo,
            AYStart: event.target.value,
          })
        }
      />

      <DropDownMenu
        label="Academic Year End"
        value={requiredInfo.AYEnd}
        arrayMenu={year}
        disabled={requiredInfo.AYStart ? false : true}
        onChange={(event) =>
          setRequiredInfo({
            ...requiredInfo,
            AYEnd: event.target.value,
          })
        }
      />

      <div>
        <Button
          variant="contained"
          className={classes.ShowButton}
          disabled={requiredInfo.AYEnd ? false : true}
          onClick={() => setShow(true)}
        >
          Show
        </Button>
      </div>

      {show === true ? <Tabs /> : null}
    </div>
  );
}

export default Body;
