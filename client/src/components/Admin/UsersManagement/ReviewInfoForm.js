import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({ input }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User created summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Contact details
          </Typography>
          <Typography gutterBottom>
            Name: {`${input.firstName} ${input.lastName}`}
          </Typography>
          <Typography gutterBottom>Email: {input.email}</Typography>
          <Typography gutterBottom>Age: {input.age}</Typography>
          <Typography gutterBottom>Gender: {input.gender}</Typography>
          <Typography gutterBottom>
            Address:{' '}
            {`${input.city}, ${input.state}, ${input.country}, ${input.zip}`}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Nutrition details
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>Weight: {input.weight} kg</Typography>

              <Typography gutterBottom>Height: {input.height} cm</Typography>

              <Typography gutterBottom>Obj: {input.objective}</Typography>

              <Typography gutterBottom>Injuries: {input.injuries}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
