import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
    borderCollapse: "separate",
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    maxWidth: "30vw",
    height: 40,
    textAlign: "center",
    "&:hover": {
      color: "black",
      backgroundColor: "rgb(0, 0, 0, 0.1)",
    },
  },
  input: {
    width: 130,
    height: 40,
  },
  tableHeaderText: {
    color: "white",
    textAlign: "center",
    borderBottom: "none",
    fontSize: "1.1em",
    border: "1px solid white",
  },
  tableHeaderEmpty: {
    color: "white",
    textAlign: "center",
    borderBottom: "none",
    fontSize: "1.1em",
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
  },
}));

// const createData = (
//   batch,
//   yearofEntry,
//   bScCertificate,
//   totalNewStudentsPerSemester,
//   totalNewStudentsPerYear
// ) => ({
//   id: batch.replace(" ", "_"),
//   batch,
//   yearofEntry,
//   bScCertificate,
//   totalNewStudentsPerSemester,
//   totalNewStudentsPerYear,
//   isEditMode: false,
// });

const CustomTableCell = ({ row, name, totalStud, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  const percentage = ((row[name] * 100) / row[totalStud]).toFixed(1);
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        <>{totalStud ? row[name] + `\n (${percentage}%)` : row[name]}</>
      )}
    </TableCell>
  );
};
let semesterOneCols = 0;
let semesterTwoCols = 0;
const SemesterModulesNumber = (rows) => {
  semesterOneCols = 0;
  semesterTwoCols = 0;
  rows.forEach(function (Item) {
    Item.semester === 1 ? semesterOneCols++ : semesterTwoCols++;
  });
};

function EditableTable(props) {
  const [rows, setRows] = React.useState([
    {
      id: 1,
      semester: 1,
      module: "Intro to Web Science",
      totalNumberOfStudents: 12,
      studentsFirstAttempt: 12,
      percentageFirstAttempt: "80",
      studentsSecondAttempt: "10",
      percentageSecondAttempt: "20",
      studentPassImprove: "1",
      percentagePassImprove: "100",
    },
    {
      id: 2,
      semester: 1,
      module: "Service Oriented SE",
      totalNumberOfStudents: 14,
      studentsFirstAttempt: "2",
      percentageFirstAttempt: "80",
      studentsSecondAttempt: "10",
      percentageSecondAttempt: "16",
      studentPassImprove: "1",
      percentagePassImprove: "100",
    },
    {
      id: 3,
      semester: 1,
      module: "Web Modeling",
      totalNumberOfStudents: 15,
      studentsFirstAttempt: "4",
      percentageFirstAttempt: "80",
      studentsSecondAttempt: "10",
      percentageSecondAttempt: "79",
      studentPassImprove: "1",
      percentagePassImprove: "100",
    },
    {
      id: 4,
      semester: 2,
      module: "Web Topologies",
      totalNumberOfStudents: 16,
      studentsFirstAttempt: "9",
      percentageFirstAttempt: "80",
      studentsSecondAttempt: "10",
      percentageSecondAttempt: "54",
      studentPassImprove: "1",
      percentagePassImprove: "100",
    },
    {
      id: 5,
      semester: 2,
      module: "Data Science",
      totalNumberOfStudents: 999,
      studentsFirstAttempt: "2",
      percentageFirstAttempt: "80",
      studentsSecondAttempt: "10",
      percentageSecondAttempt: "16",
      studentPassImprove: "1",
      percentagePassImprove: "100",
    },
  ]);
  SemesterModulesNumber(rows);
  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  const onToggleEditMode = (id) => {
    setRows((state) => {
      return rows.map((row) => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#AF0000" }}>
            <TableCell className={classes.tableHeaderText} align="left" />
            <TableCell
              className={classes.tableHeaderText}
              align="left"
              style={{ paddingBottom: "10px" }}
              colSpan={2}
            ></TableCell>
            <TableCell
              className={classes.tableHeaderText}
              align="left"
              colSpan={semesterOneCols}
            >
              Semester 1
            </TableCell>
            <TableCell
              colSpan={semesterTwoCols}
              className={classes.tableHeaderText}
              align="left"
            >
              Semester 2
            </TableCell>
          </TableRow>

          <TableRow style={{ backgroundColor: "#AF0000" }}>
            <TableCell
              className={classes.tableHeaderEmpty}
              align="left"
            ></TableCell>
            <TableCell
              colSpan={2}
              rowSpan={2}
              className={classes.tableHeaderEmpty}
              align="left"
            >
              Module Code and Title
            </TableCell>
            {rows.map((row) => (
              <TableCell className={classes.tableHeaderText} align="left">
                {row.module}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell colSpan={2}>Total Number of Students</TableCell>
            {rows.map((row) => (
              <CustomTableCell
                {...{ row, name: "totalNumberOfStudents", onChange }}
              />
            ))}
          </TableRow>

          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Pass at first Attempt</TableCell>
            <TableCell>
              <TableRow>Students</TableRow>
              <TableRow>Percentage</TableRow>
            </TableCell>
            {rows.map((row) => (
              <CustomTableCell
                {...{
                  row,
                  name: "studentsFirstAttempt",
                  totalStud: "totalNumberOfStudents",
                  onChange,
                }}
              />
            ))}
          </TableRow>

          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Pass at Second Attempt</TableCell>
            <TableCell>
              <TableRow>Students</TableRow>
              <TableRow>Percentage</TableRow>
            </TableCell>
            {rows.map((row) => (
              <CustomTableCell
                {...{
                  row,
                  name: "studentsSecondAttempt",
                  totalStud: "totalNumberOfStudents",
                  onChange,
                }}
              />
            ))}
          </TableRow>

          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>
              Pass at second attempt in order to improve GPA
            </TableCell>
            <TableCell>
              <TableRow>Students</TableRow>
              <TableRow>Percentage</TableRow>
            </TableCell>
            {rows.map((row) => (
              <CustomTableCell
                {...{
                  row,
                  name: "studentPassImprove",
                  totalStud: "totalNumberOfStudents",
                  onChange,
                }}
              />
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default EditableTable;
