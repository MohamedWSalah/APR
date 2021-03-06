import React from "react";
import AboveTableText from "../../AboveTableText";
import CoreModulesTable from "./PBDTables/CoreModulesTable";
import { makeStyles, AppBar, Tabs, Tab, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import SummaryProbationPeriod from "./PBDTables/SummaryProbationPeriod";
import ProgressionThesisPropsal from "./PBDTables/ProgressionThesisProposal";
import VoluntaryWithdrawls from "./PBDTables/VoluntaryWithdrawls";
import ExpectedToGraduate from "./PBDTables/ExpectedToGraduate";
import DegreeAwarded from "./PBDTables/DegreeAwarded";
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
          <div>{children}</div>
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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

function PBDMain() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const TabsInfo = [
    "Core Modules",
    "Optional Modules",
    "Summary of the probation",
    "Progression to Thesis proposal",
    "Voluntary Withdrawls and/or Offical Dismissed",
    "Expected to be graduated",
    "Degrees awarded",
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
        <AboveTableText headerText={"Core modules"} />
        <CoreModulesTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AboveTableText headerText={"Optional modules"} />
        <CoreModulesTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AboveTableText headerText={"Summary probation period"} />
        <SummaryProbationPeriod />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AboveTableText headerText={"Progression to Thesis propsal"} />
        <ProgressionThesisPropsal />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AboveTableText
          headerText={"Voluntary withdrawls / official dismissed"}
        />
        <VoluntaryWithdrawls />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AboveTableText headerText={"Expected to be graduated in 18/19"} />
        <ExpectedToGraduate />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AboveTableText headerText={"Degree Awarded"} />
        <DegreeAwarded />
      </TabPanel>
    </div>
  );
}
export default PBDMain;
