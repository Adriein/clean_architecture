import React, { useState, useContext } from 'react';
import { UsersContext } from '../../../contexts/UsersContext';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import useToggle from '../../../hooks/useToggle';

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
import CircularProgress from '@material-ui/core/CircularProgress';

//icons
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function createData(id, status, rol, email, password, name, lastName, gender) {
  return { id, status, rol, email, password, name, lastName, gender };
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Users' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'rol', numeric: true, disablePadding: false, label: 'Rol' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'password', numeric: true, disablePadding: false, label: 'Password' },
  { id: 'gender', numeric: true, disablePadding: false, label: 'Gender' },
  { id: 'actions', numeric: true, disablePadding: false, label: 'Actions' },
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
function EnhancedTableToolbar({ selected, classes, setCreate, del }) {
  const onDelete = (event) => {
    selected.forEach((id) => del(`api/admin/profile/${id}`));
  };

  return (
    <Paper elevation={0}>
      <Toolbar
        className={clsx(classes.toolbar, {
          [classes.highlight]: selected.length > 0,
        })}
      >
        {selected.length > 0 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {selected.length} selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Users Management
          </Typography>
        )}

        {selected.length > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Create user" placement="left">
            <IconButton aria-label="create user" onClick={setCreate}>
              <PersonAddIcon />
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
          <Tooltip title="select all users" placement="top">
            <Checkbox
              inputProps={{ 'aria-label': 'select all users' }}
              onChange={selectAll}
            />
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

const styles = {
  toolbar: {
    marginBottom: '1em',
  },
  highlight: {
    backgroundColor: '#fce4ec',
    color: '#e91e63',
  },
  title: {
    flex: '1 1 100%',
  },
};

function CreationDialog({ isCreating, setView, setCreating }) {
  return (
    <Dialog
      open={isCreating}
      onClose={setCreating}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create User</DialogTitle>
      <DialogContent>
        <DialogContentText>
          If the user is brand new put their email and click send, otherwise
          select create existing user
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={setView}>
          Create Existing User
        </Button>
        <Button color="primary">Create</Button>
      </DialogActions>
    </Dialog>
  );
}

function OrderedTable({ classes, setView, setUser }) {
  console.log('render table');
  const { state, del } = useContext(UsersContext);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('status');
  const [selected, setSelected] = useState([]);
  const [isCreating, setCreating] = useToggle();

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
    if (event.target.checked)
      return setSelected([...rows.map((value) => value.id)]);
    return setSelected([]);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  const rows = state.data.map((user) =>
    createData(
      user.id,
      user.status,
      user.rol,
      user.email,
      user.password,
      user.firstName,
      user.lastName,
      user.gender
    )
  );

  const onView = (id) => (event) => {
    setUser(id);
    setView();
  };

  return (
    <>
      <CreationDialog
        isCreating={isCreating}
        setView={setView}
        setCreating={setCreating}
      />
      {state.loading ? (
        <CircularProgress classes={{ root: classes.loading }} />
      ) : (
        <>
          <EnhancedTableToolbar
            selected={selected}
            classes={classes}
            setCreate={setCreating}
            del={del}
          />
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
                        <Checkbox
                          checked={isItemSelected}
                          onClick={onSelect(row.id)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={row.name}
                        scope="row"
                        padding="none"
                      >
                        {`${row.name} ${row.lastName}`}
                      </TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.rol}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.password}</TableCell>
                      <TableCell align="right">{row.gender}</TableCell>
                      <TableCell align="right">
                        <Tooltip title="View">
                          <IconButton
                            aria-label="view"
                            onClick={onView(row.id)}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
export default withStyles(styles)(OrderedTable);
