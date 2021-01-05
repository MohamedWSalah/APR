import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import AboveTableText from "../../../AboveTableText";

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

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
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
        row[name]
      )}
    </TableCell>
  );
};

function EditableTable() {
  const [rows, setRows] = React.useState([
    // createData("1", 159, 6.0, 24, 4.0),
    // createData("2", 237, 9.0, 37, 4.3),
    // createData("3", 262, 16.0, 24, 6.0),
    // createData("3", 262, 16.0, 24, 6.0),
    // createData("3", 262, 16.0, 24, 6.0),
    // createData("3", 262, 16.0, 24, 6.0),
    {
      id: 1,
      batch: "1",
      yearOfEntry: "S1 18/19",
      totalNoInProgram: 80,
      studentsQualified: 10,
      qualifiedProgressionPerc: 5,
      studentsSubmittedProposal: 20,
      submittedProgreesionPerc: 30,
    },
    {
      id: 2,
      batch: "2",
      yearOfEntry: "S1 17/18",
      totalNoInProgram: 100,
      studentsQualified: 8,
      qualifiedProgressionPerc: 9,
      studentsSubmittedProposal: 65,
      submittedProgreesionPerc: 33,
    },
    {
      id: 3,
      batch: "3",
      yearOfEntry: "S2 16/17",
      totalNoInProgram: 50,
      studentsQualified: 10,
      qualifiedProgressionPerc: 14,
      studentsSubmittedProposal: 20,
      submittedProgreesionPerc: 7,
    },
  ]);
  const [previous, setPrevious] = React.useState({});
  const classes = useStyles();

  // const onToggleEditMode = (id) => {
  //   setRows((state) => {
  //     return rows.map((row) => {
  //       if (row.id === id) {
  //         return { ...row, isEditMode: !row.isEditMode };
  //       }
  //       return row;
  //     });
  //   });
  // };

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

  // const onRevert = (id) => {
  //   const newRows = rows.map((row) => {
  //     if (row.id === id) {
  //       return previous[id] ? previous[id] : row;
  //     }
  //     return row;
  //   });
  //   setRows(newRows);
  //   setPrevious((state) => {
  //     delete state[id];
  //     return state;
  //   });
  //   onToggleEditMode(id);
  // };

  return (
    <>
      <AboveTableText headerText={"Progression of thesis proposal"} />
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#AF0000" }}>
              <TableCell
                className={classes.tableHeaderEmpty}
                align="left"
              ></TableCell>
              <TableCell className={classes.tableHeaderEmpty} align="left">
                Batch
              </TableCell>
              <TableCell className={classes.tableHeaderEmpty} align="left">
                Year of Entry to thesis propsal
              </TableCell>
              <TableCell className={classes.tableHeaderText} align="left">
                Total No. in program
              </TableCell>
              <TableCell className={classes.tableHeaderText} align="left">
                Students qualified
              </TableCell>
              <TableCell className={classes.tableHeaderEmpty} align="left">
                Qualified Progression %
              </TableCell>
              <TableCell className={classes.tableHeaderEmpty} align="left">
                Students submitted propsals
              </TableCell>
              <TableCell className={classes.tableHeaderEmpty} align="left">
                Submitted progression %
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>*</TableCell>

                <CustomTableCell {...{ row, name: "batch", onChange }} />
                <CustomTableCell {...{ row, name: "yearOfEntry", onChange }} />
                <CustomTableCell
                  {...{ row, name: "totalNoInProgram", onChange }}
                />
                <CustomTableCell
                  {...{ row, name: "studentsQualified", onChange }}
                />
                <CustomTableCell
                  {...{ row, name: "qualifiedProgressionPerc", onChange }}
                />
                <CustomTableCell
                  {...{ row, name: "studentsSubmittedProposal", onChange }}
                />
                <CustomTableCell
                  {...{ row, name: "submittedProgreesionPerc", onChange }}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/*<Button variant="contained" onClick={() => console.log(rows)}>
        print state (TEST ONLY)
                </Button>*/}
      </Paper>
    </>
  );
}

export default EditableTable;
