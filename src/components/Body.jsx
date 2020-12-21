import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import DropDownMenu from "./DropDownMenu";
import Tabs from "./Tabs";
import TemporaryDrawer from "./Drawer";

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

function Body(props) {
  const classes = useStyles();

  const { setDrawerWidth, drawerWidth } = props;

  const faculties = [
    "Informatics & Computer Science",
    "Engineering",
    "Business Administration",
    "Dentistry",
  ];
  const programTitles = ["Masters in WebScience", "Marketing", "Renewable"];
  const year = ["2016/2017", "2017/2018", "2018/2019"];
  const [show, setShow] = useState(false);
  const [requiredInfo, setRequiredInfo] = useState({
    faculty: "",
    programTitle: "",
    AYStart: "",
    AYEnd: "",
  });
  return (
    <div className={classes.root} style={{ marginTop: "1vw" }}>
      <div style={drawerWidth ? { marginLeft: 280 } : null}>
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
      </div>

      {show === true ? (
        <TemporaryDrawer
          setDrawerWidth={setDrawerWidth}
          drawerWidth={drawerWidth}
        />
      ) : null}
    </div>
  );
}

export default Body;
