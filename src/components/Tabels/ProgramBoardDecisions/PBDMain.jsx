import React from "react";
import AboveTableTExt from "../../AboveTableText";
import CoreModulesTable from "./PBDTables/CoreModulesTable";
import {
  Paper,
  TextField,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Box,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";

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
  const TabsInfo = ["1", "2", "3", "4"];

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
        <CoreModulesTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Pending....
      </TabPanel>
      <TabPanel value={value} index={2}>
        Pending....
      </TabPanel>
      <TabPanel value={value} index={3}>
        Pending....
      </TabPanel>
      <TabPanel value={value} index={4}>
        Pending....
      </TabPanel>
    </div>
  );
}
export default PBDMain;
