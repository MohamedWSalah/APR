import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
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

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import svgTest from "./half2.svg";
const useStyles = makeStyles((theme) => ({
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
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {};

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
  };

  const list = (anchor) => (
    <div>
      <Divider />
      <List>
        {TabsInfo.map((text, index) =>
          value === text ? (
            <>
              <ListItem style={{ backgroundColor: "grey" }} button key={text}>
                <ListItemText
                  key={text}
                  primary={text}
                  onClick={() => setValue(text)}
                />
              </ListItem>
              <Divider />
            </>
          ) : text === "Program Board Decisions" ? (
            <>
              <ListItem button key={text} onClick={() => setOpen(!open)}>
                <ListItemText primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Divider />
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {PBDTabs.map((text) => (
                    <>
                      <ListItem
                        key={text}
                        button
                        className={classes.nested}
                        style={
                          value === text ? { backgroundColor: "grey" } : null
                        }
                      >
                        <ListItemText
                          primary={text}
                          key={text}
                          onClick={() => setValue(text)}
                        />
                      </ListItem>
                      <Divider />
                    </>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <>
              <ListItem button key={text}>
                <ListItemText primary={text} onClick={() => setValue(text)} />
              </ListItem>
              <Divider />
            </>
          )
        )}
      </List>
    </div>
  );

  return (
    <div
      style={{
        flexGrow: 1,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img
            draggable
            className={classes.leftSideMenuButton}
            src={svgTest}
            alt=""
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            key={anchor}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {renderTabs()}
    </div>
  );
}
