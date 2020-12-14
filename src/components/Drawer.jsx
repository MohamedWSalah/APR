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

import svgTest from "./half2.svg";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

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
    ) : null;
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        {TabsInfo.map((text, index) =>
          value === text ? (
            <>
              <ListItem style={{ backgroundColor: "grey" }} button key={text}>
                <ListItemText primary={text} onClick={() => setValue(text)} />
              </ListItem>
              <Divider />
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
            src={svgTest}
            alt=""
            onClick={toggleDrawer(anchor, true)}
            style={{
              position: "fixed",
              left: "0px",
              top: "40%",
              zIndex: 100,
              opacity: "0.9",
            }}
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
