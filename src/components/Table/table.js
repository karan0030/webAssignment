import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


import "./table.css";
import { ContactlessTwoTone } from "@material-ui/icons";







let id = 0;
function createData(
  case_no,
  branch,
  reporting_method,
  date,
  time,
  category,
  sub_category,
  priority,
  nature,
  case_manager,
  case_reporter,
  case_status
) {
  id +=1;
  return {id,
    case_no,
    branch,
    reporting_method,
    date,
    time,
    category,
    sub_category,
    priority,
    nature,
    case_manager,
    case_reporter,
    case_status,
  };
}

const P_color ={
  "high":"#FF0000",
  "low":"#FFA700",
  "medium":"#FF7A30"
}
const Status_color ={
  "not_prepared":"#FF0000",
  "progress":"#FF7A30",
  "Not_Prepared":"#FF0000",
  "Progress":"#FF7A30"
}
const row_no=0;

const rows = [
  createData(1900011,"branch 11","In Person","12-02-21","12:35:02","Grievence","Complaints","low","health","daryl","tanner","Not_Prepared"
  ),
  createData(1900012,"branch 12","In Person","12-02-21","12:35:02","Grievence","Complaints","low","health","daryl","tanner","Not_Prepared"
  ),
  createData(1900013,"branch 13","In Person","12-02-21","12:35:02","Grievence","Complaints","low","health","daryl","tanner","Progress"
  ),
  createData(1900014,"branch 14","In Person","12-02-21","12:35:02","Grievence","Complaints","low","health","daryl","tanner","Not_Prepared"
  ),
  createData(1900015,"branch 15","In Person","12-02-21","12:35:02","Grievence","Complaints","low","health","daryl","tanner","Not_Prepared"
  ),
  createData(1900016,"branch 16","In Person","12-02-21","12:35:02","Grievence","Complaints","low","health","daryl","tanner","Not_Prepared"
  ),
  createData(1900017,"branch 17","In Person","12-02-21","12:35:02","Grievence","Complaints","high","health","daryl","tanner","Not_Prepared"
  ),
  createData(1900018,"branch 18","In Person","12-02-21","12:35:02","Grievence","Complaints","medium","health","daryl","tanner","Not_Prepared"
  ),
  createData(1900019,"branch 19","In Person","12-02-21","12:35:02","Grievence","Complaints","low","health","daryl","tanner","Not_Prepared"
  ),
  createData(1900020,"branch 10","In Person","12-02-21","12:35:02","Grievence","Complaints","low","health","daryl","tanner","Not_Prepared"
  ),
  
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "case_no",
    numeric: true,
    disablePadding: false,
    align:'center',
    label: "CASE NO.",
  },
  { id: "branch", numeric: false, disablePadding: false, label: "BRANCH" },
  {
    id: "reporting_method",
    numeric: false,
    disablePadding: false,
    label: "REPORTING METHOD",
  },
  { id: "date", numeric: false, disablePadding: false, label: "DATE" },
  { id: "time", numeric: false, disablePadding: false, label: "TIME" },
  { id: "category", numeric: false, disablePadding: false, label: "CATEGORY" },
  {
    id: "sub_category",
    numeric: false,
    disablePadding: false,
    label: "SUB CATEGORY",
  },
  { id: "priority", numeric: false, disablePadding: false, label: "PRIORITY"  },
  { id: "nature", numeric: false, disablePadding: false, label: "NATURE" },
  {
    id: "case_manager",
    numeric: false,
    disablePadding: false,
    label: "CASE MANAGER",
  },
  {
    id: "case_reporter",
    numeric: false,
    disablePadding: false,
    label: "CASE REPORTER",
  },
  {
    id: "case_status",
    numeric: false,
    disablePadding: false,
    label: "CASE STATUS",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  
 
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{fontSize:".6rem", color:"#949292"}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margintop: 150,
    paddingLeft: .01
  

  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: 0,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 0,
  },
  tabcell:{
    fontSize:"1.5 rem"
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
 
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [rno,setRno]=React.useState(0);

   const handleClick = (id) => {
    
    return (event) => {
      setRno(id-1)
      //console.log(`You clicked on row with id ${id-1}.`);
    }
  }


  // function handleCellClick =(event)=> {
    
  //   console.log(event)
  //   setRno(2);
  // }
  

  const [personName, setPersonName] = React.useState(rows);

  const handleChange = (event) => {
  //  console.log(event.target.value,event)
    personName[rno]['priority']=event.target.value;
    //console.log(personName[rno])
    setPersonName(rows)

    
  };

  return (
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <TableContainer >
        
          <Table
            className={classes.table} 
            
            aria-labelledby="tableTitle"
            
            
            aria-label="enhanced table"
          > 
            
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody >
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    
                    <TableRow hover key={row.case_no} class="tableData" >
                    <p hidden>setState({row.priority})</p>
                    
                      <TableCell >{row.case_no}</TableCell>
                      <TableCell>{row.branch}</TableCell>
                      <TableCell>{row.reporting_method}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.time}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.sub_category}</TableCell>
                      <TableCell id ={row.case_no} onClick={handleClick(row.id)}>
                                 <Select
                                  native
                                  aria-label={row.priority}
                                  value={row.priority}
                                  onChange={handleChange}
                                  
                                  style={{backgroundColor:P_color[row.priority ] ,borderRadius:"4px",textAlign:"center" ,width:"90%" ,height:"25px",color:"white"}}
                                  
                                  inputProps={{
                                    personName: `{row.priority}`,
                                    
                                    
                                  }}
                                  >
                                <option aria-label="{row.priority}" value=""/>
                                <option style={{ backgroundColor:P_color["low"]}}value={"low"}>Low</option>
                                <option style={{ backgroundColor:P_color["medium"]}}value={"medium"}>Medium</option>
                                <option style={{ backgroundColor:P_color["high"]}} value={"high"}>High</option>
                                </Select> </TableCell>
                      <TableCell>{row.nature}</TableCell>
                      <TableCell>{row.case_manager}</TableCell>
                      <TableCell>{row.case_reporter}</TableCell>
                      <TableCell><div class={row.case_status} >{row.case_status}</div></TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
