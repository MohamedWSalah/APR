import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import EntryForTheAYs from "./Tabels/EntryForTheAYsF/EntryForTheAYs";
import EnglishLanguageLevels from "./Tabels/EnglishLanguageLevels/EnglishLanguageLevels";
import StaffSudentComMeetings from "./Tabels/StaffStudentComMeetings/StaffStudentComMeetings";
import ProgramFeedback from "./Tabels/ProgramFeedback/ProgramFeedback";
import TeachingStaff from "./Tabels/TeachingStaff/TeachingStaff";
import LSBULinkTutorReports from "./Tabels/LSBULinkTutorReports/LSBULinkTutorReports";
import ReviewOfAssessments from "./Tabels/ReviewOfAssessments/ReviewOfAssessments";
import ExternalExaminerReport from "./Tabels/ExternalExaminerReport/ExternalExaminerReport";
import ModuleSpecifications from "./Tabels/ModuleSpecifications/ModuleSpecifications";
import StaffBreakDownForTheCurrentAY from "./Tabels/StaffBreakDownForTheCurrentAY/StaffBreakDownForTheCurrentAY";
import StudentProfileAndMarketing from "./Tabels/StudentProfileAndMarketing/StudentProfileAndMarketing";
import SupportingDoc from "./Tabels/SupportingDocumentation/SupportingDocumentation";

import PBDMain from "./Tabels/ProgramBoardDecisions/PBDMain";
import SummaryProbationPeriod from "./Tabels/ProgramBoardDecisions/PBDTables/SummaryProbationPeriod";
import ProgressionThesisPropsal from "./Tabels/ProgramBoardDecisions/PBDTables/ProgressionThesisProposal";
import VoluntaryWithdrawls from "./Tabels/ProgramBoardDecisions/PBDTables/VoluntaryWithdrawls";
import ExpectedToGraduate from "./Tabels/ProgramBoardDecisions/PBDTables/ExpectedToGraduate";
import DegreeAwarded from "./Tabels/ProgramBoardDecisions/PBDTables/DegreeAwarded";
import CoreModulesTable from "./Tabels/ProgramBoardDecisions/PBDTables/CoreModulesTable";

import clsx from "clsx";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";

import svgTest from "./half2.svg";

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  leftSideMenuButton: {
    position: "fixed",
    left: "0px",
    top: "40%",
    zIndex: 100,
    opacity: "0.9",
    "&:hover": {
      cursor: "pointer",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    margin: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function TemporaryDrawer(props) {
  const classes = useStyles();

  const { setDrawerWidth } = props;

  const [state, setState] = React.useState({
    left: false,
  });

  const [open] = React.useState(false);

  const [openSub, setOpenSub] = React.useState(false);

  const [value, setValue] = React.useState("Entry for the AYs");

  const TabsInfo = [
    "Entry for the AYs",
    "English Language Levels",
    "Program Board Decisions",
    "Staff-Student Liaison committe",
    "Program & Module feedback",
    "Teaching Staff",
    "LSBU link tutor reports",
    "Review of assessments",
    "External Examiner Report",
    "Module Specifications",
    "Staff breakdown for the current AY",
    "Student profile & marketing",
    "Support documentation",
  ];
  const PBDTabs = [
    "Core Modules",
    "Optional Modules",
    "Summary of the probation",
    "Progression to Thesis proposal",
    "Voluntary Withdrawls and/or Offical Dismissed",
    "Expected to be graduated",
    "Degrees awarded",
  ];
  const renderTabs = () => {
    return value === "Entry for the AYs" ? (
      <EntryForTheAYs />
    ) : value === "English Language Levels" ? (
      <EnglishLanguageLevels />
    ) : value === "Program Board Decisions" ? (
      <PBDMain />
    ) : value === "Staff-Student Liaison committe" ? (
      <StaffSudentComMeetings />
    ) : value === "Program & Module feedback" ? (
      <ProgramFeedback />
    ) : value === "Teaching Staff" ? (
      <TeachingStaff />
    ) : value === "LSBU link tutor reports" ? (
      <LSBULinkTutorReports />
    ) : value === "Review of assessments" ? (
      <ReviewOfAssessments />
    ) : value === "External Examiner Report" ? (
      <ExternalExaminerReport />
    ) : value === "Module Specifications" ? (
      <ModuleSpecifications />
    ) : value === "Staff breakdown for the current AY" ? (
      <StaffBreakDownForTheCurrentAY />
    ) : value === "Student profile & marketing" ? (
      <StudentProfileAndMarketing />
    ) : value === "Support documentation" ? (
      <SupportingDoc />
    ) : value === "Core Modules" ? (
      <CoreModulesTable />
    ) : value === "Optional Modules" ? (
      <CoreModulesTable />
    ) : value === "Summary of the probation" ? (
      <SummaryProbationPeriod />
    ) : value === "Progression to Thesis proposal" ? (
      <ProgressionThesisPropsal />
    ) : value === "Voluntary Withdrawls and/or Offical Dismissed" ? (
      <VoluntaryWithdrawls />
    ) : value === "Expected to be graduated" ? (
      <ExpectedToGraduate />
    ) : value === "Degrees awarded" ? (
      <DegreeAwarded />
    ) : null;
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown") {
      return;
    }
    setState({ ...state, [anchor]: open });
    setDrawerWidth(open);
  };

  const list = (anchor) => (
    <>
      <Divider />
      <List>
        {TabsInfo.map((text, index) =>
          text === "Program Board Decisions" ? (
            <>
              <ListItem button key={text} onClick={() => setOpenSub(!openSub)}>
                <ListItemText primary={text} />
                {openSub ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Divider />
              <Collapse in={openSub} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {PBDTabs.map((text) => (
                    <>
                      <ListItem
                        key={text}
                        button
                        className={classes.nested}
                        style={
                          value === text
                            ? { backgroundColor: "#AF0000", color: "white" }
                            : null
                        }
                        onClick={() => setValue(text)}
                      >
                        <ListItemText primary={text} key={text} />
                      </ListItem>
                      <Divider />
                    </>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <>
              <ListItem
                button
                key={text}
                onClick={() => setValue(text)}
                style={
                  value === text
                    ? { backgroundColor: "#AF0000", color: "white" }
                    : null
                }
              >
                <ListItemText primary={text} />
              </ListItem>
              <Divider />
            </>
          )
        )}
      </List>
    </>
  );

  return (
    <div
      style={{
        flexGrow: 1,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <img
        className={classes.leftSideMenuButton}
        src={svgTest}
        alt=""
        onClick={toggleDrawer("left", true)}
      />

      <Drawer
        anchor={"left"}
        variant="persistent"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer("left", open)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {list("left")}
      </Drawer>
      <div className={classes.drawerHeader} />
      <div style={state.left ? { marginLeft: 280 } : null}>{renderTabs()}</div>
    </div>
  );
}
