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
    fontSize: "25px",
    "&:hover": {
      color: "black",
      backgroundColor: "rgb(0, 0, 0, 0.1)",
    },
  },
  input: {
    width: 130,
    height: 40,
    fontSize: "25px",
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

function EditableTable() {
  const [rows, setRows] = React.useState([
    {
      id: 1,
      totalNumberOfStudents: 100,
      entryStudents: 20,
      continued: 10,
      enhancingModules: 20,
      repeatingModules: 5,
      totalProgressingToThesis: 9,
    },
    {
      id: 2,
      totalNumberOfStudents: 70,
      entryStudents: 5,
      continued: 9,
      enhancingModules: 2,
      repeatingModules: 5,
      totalProgressingToThesis: 7,
    },
    {
      id: 3,
      totalNumberOfStudents: 50,
      entryStudents: 9,
      continued: 6,
      enhancingModules: 7,
      repeatingModules: 5,
      totalProgressingToThesis: 3,
    },
  ]);
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
            >
              Item
            </TableCell>

            <TableCell className={classes.tableHeaderText} align="left">
              2018/2019
            </TableCell>

            <TableCell className={classes.tableHeaderText} align="left">
              2017/2018
            </TableCell>

            <TableCell className={classes.tableHeaderText} align="left">
              2016/2017
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "18px" }}>
              Total Number of Students
            </TableCell>
            {rows.map((row) => (
              <CustomTableCell
                {...{ row, name: "totalNumberOfStudents", onChange }}
              />
            ))}
          </TableRow>

          <TableRow>
            <TableCell>1</TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "18px" }}>
              Entry Students
            </TableCell>

            {rows.map((row) => (
              <CustomTableCell
                {...{
                  row,
                  name: "entryStudents",
                  totalStud: "totalNumberOfStudents",
                  onChange,
                }}
              />
            ))}
          </TableRow>

          <TableRow>
            <TableCell>1</TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "18px" }}>
              Continued
            </TableCell>

            {rows.map((row) => (
              <CustomTableCell
                {...{
                  row,
                  name: "continued",
                  totalStud: "totalNumberOfStudents",
                  onChange,
                }}
              />
            ))}
          </TableRow>

          <TableRow>
            <TableCell>1</TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "18px" }}>
              Enhancing Modules
            </TableCell>
            {rows.map((row) => (
              <CustomTableCell
                {...{
                  row,
                  name: "enhancingModules",
                  totalStud: "totalNumberOfStudents",
                  onChange,
                }}
              />
            ))}
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "18px" }}>
              Repeating Modules
            </TableCell>
            {rows.map((row) => (
              <CustomTableCell
                {...{
                  row,
                  name: "repeatingModules",
                  totalStud: "totalNumberOfStudents",
                  onChange,
                }}
              />
            ))}
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell style={{ fontWeight: "bold", fontSize: "18px" }}>
              Total progressing to thesis
            </TableCell>
            {rows.map((row) => (
              <CustomTableCell
                {...{
                  row,
                  name: "totalProgressingToThesis",
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
