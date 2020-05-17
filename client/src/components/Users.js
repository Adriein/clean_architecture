import React, { useState } from 'react';

import Navigation from './Navigation';
import { withStyles } from '@material-ui/core/styles';
import UsersStyles from '../styles/UsersStyles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

function createData(id, status, rol, email, password, name, lastName, gender) {
  return { id, status, rol, email, password, name, lastName, gender };
}

const rows = [
  createData('1', 'active', 'user', 'test@test.com', 'contubicocu', 'Juan', 'Martin', 'male'),
  createData('2', 'active', 'user', 'test@test.com', 'contubicocu', 'Matt', 'Martin', 'male'),
  createData('3', 'active', 'user', 'test@test.com', 'contubicocu', 'Joe', 'Martin', 'male'),
  createData('4', 'active', 'user', 'test@test.com', 'contubicocu', 'Ruth', 'Martin', 'female'),
  createData('5', 'z', 'user', 'test@test.com', 'contubicocu', 'Juan', 'Martin', 'male'),
  createData('6', 'active', 'user', 'test@test.com', 'contubicocu', 'Juan', 'Martin', 'male'),
  createData('7', 'active', 'user', 'test@test.com', 'contubicocu', 'Juan', 'Martin', 'male'),
  createData('8', 'active', 'user', 'test@test.com', 'contubicocu', 'Adria', 'Claret', 'male'),
];
const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Users' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'rol', numeric: true, disablePadding: false, label: 'Rol' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'password', numeric: true, disablePadding: false, label: 'Password' },
  { id: 'gender', numeric: true, disablePadding: false, label: 'Gender' },
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
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function tableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
function EnhancedTableToolbar({ numSelected }) {
  return (
    <Paper>
      <Toolbar
      // className={clsx(classes.root, {
      //   [classes.highlight]: numSelected > 0,
      // })}
      >
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1" component="div">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle" component="div">
            Users Management
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </Paper>
  );
}

function EnhancedTableHead({ order, orderBy, sort, selectAll }) {
  const onFilter = (column) => (event) => {
    sort(column);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Tooltip title="select all users" placement="left">
            <Checkbox inputProps={{ 'aria-label': 'select all users' }} onChange={selectAll} />
          </Tooltip>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={onFilter(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function OrderedTable({ classes }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('status');
  const [selected, setSelected] = useState([]);

  const sort = (column, event) => {
    const isAsc = orderBy === column && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(column);
  };

  const onSelect = (id) => (event) => {
    if (selected.indexOf(id) === -1) return setSelected([...selected, id]);
    return setSelected(selected.filter((value) => value !== id));
  };

  const masterSelect = (event) => {
    if (event.target.checked) return setSelected([...rows.map((value) => value.id)]);
    return setSelected([]);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <div className={classes.root}>
      <div className={classes.navigation}>
        <Navigation />
      </div>
      <div className={classes.container}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              sort={sort}
              selectAll={masterSelect}
            />
            <TableBody>
              {tableSort(rows, getComparator(order, orderBy)).map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} onClick={onSelect(row.id)} />
                    </TableCell>
                    <TableCell component="th" id={row.name} scope="row" padding="none">
                      {`${row.name} ${row.lastName}`}
                    </TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.rol}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.password}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default withStyles(UsersStyles)(OrderedTable);
