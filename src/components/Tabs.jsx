import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Box, Button } from "@material-ui/core";
import EntryForTheAYs from "./Tabels/EntryForTheAYs";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ marginTop: "2vw" }}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     "aria-controls": `scrollable-auto-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {TabsInfo.map((item) => (
            <Tab key={TabsInfo.indexOf(item)} label={item} />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EntryForTheAYs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>

      {value === 0 ? null : (
        <Button
          variant="contained"
          color="primary"
          style={{ left: "19%" }}
          onClick={() => (value > 0 ? setValue(value - 1) : null)}
        >
          Back
        </Button>
      )}

      <Button
        variant="contained"
        color="primary"
        style={{ left: "20%" }}
        onClick={() =>
          value === TabsInfo.length - 1 ? null : setValue(value + 1)
        }
        disabled={TabsInfo.length - 1 === value ? true : false}
      >
        Next
      </Button>
    </div>
  );
}
