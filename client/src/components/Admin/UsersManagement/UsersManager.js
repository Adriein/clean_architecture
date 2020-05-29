import React, { useState } from 'react';
import Navigation from '../../Navigation';
import { withStyles } from '@material-ui/core/styles';
import OrderedTable from './OrderedTable';

import UserView from './UserView';
import UserForm from "./UserForm";

import { UsersProvider } from '../../../contexts/UsersContext';

import useToggle from '../../../hooks/useToggle';

const styles = {
  root: {
    height: '100vh',
    maxWidth: 'none',
    padding: '0px',
    display: 'grid',
    gridTemplateColumns: '0.125fr 1fr',
  },

  container: {
    padding: '2em',
  },
  title: {
    flex: '1 1 100%',
  },
};

function UsersManager({ classes }) {
  const [isView, setView] = useToggle();

  return (
    <div className={classes.root}>
      <div className={classes.navigation}>
        <Navigation />
      </div>

      <div className={classes.container}>
        <UsersProvider>
          {isView ? <UserForm /> : <OrderedTable setView={setView} />}
        </UsersProvider>
      </div>
    </div>
  );
}
export default withStyles(styles)(UsersManager);
