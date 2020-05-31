import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useInput from '../../../hooks/useInput';
import { UsersContext } from '../../../contexts/UsersContext';

import PersonalInfoForm from './PersonalInfoForm';
import NutritionInfoForm from './NutritionInfoForm';
import ReviewInfoForm from './ReviewInfoForm';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
  },
  buttonCancel: {
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Personal info', 'Nutritional info', 'Review the user'];

function getStepContent(step, input, setInput) {
  switch (step) {
    case 0:
      return <PersonalInfoForm input={input} setInput={setInput} />;
    case 1:
      return <NutritionInfoForm input={input} setInput={setInput} />;
    case 2:
      return <ReviewInfoForm input={input} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout({ setView, userId, setUserId }) {
  console.log('render the main form');
  const classes = useStyles();
  const { state, makePost } = useContext(UsersContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const initialUserState =
    userId !== -1
      ? state.data.find((element) => element.id === userId)
      : {
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          gender: '',
          level: '',
          age: '',
          height: '',
          weight: '',
          notes: '',
          injuries: '',
          status: '',
          rol: '',
          objective: '',
          country: '',
          state: '',
          zip: '',
          city: '',
        };

  const [input, setInput] = useInput(initialUserState);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      makePost('api/admin/profile', input);
      setUserId(-1);
      setView();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCancel = () => {
    setUserId(-1);
    setView();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            User Creation Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            User Creation
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, input, setInput)}
                <div className={classes.buttons}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.buttonCancel}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Save User' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
