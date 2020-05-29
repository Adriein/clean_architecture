// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Box from '@material-ui/core/Box';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';

// //icons
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
// import EditIcon from '@material-ui/icons/Edit';
// import Icon from '@material-ui/core/Icon';
// import RoomIcon from '@material-ui/icons/Room';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </div>
//   );
// }

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   form: {
//     // '& div': {
//     //   '& div': {
//     //     marginRight: '0.5em',
//     //   },
//     // },
//   },
// };

// function CenteredTabs({ classes }) {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         centered
//       >
//         <Tab label="General Info" />
//         <Tab label="Diets" />
//         <Tab label="Plans" />
//         <Tab label="Feedback" />
//       </Tabs>

//       <TabPanel value={value} index={0} className={classes.form}>
//         <Grid container>
//           <Grid item xs={2}>
//             <Avatar>A</Avatar>
//           </Grid>
//           <Grid item xs={10}>
//             <Grid container>
//               <Grid item xs={2}>
//                 <Typography variant="h5">Name Lastname</Typography>
//               </Grid>
//               <Grid item xs={10}>
//                 <Typography variant="subtitle1">Rubí</Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography variant="subtitle2">user rol</Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography variant="subtitle1">Level *****</Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <IconButton>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton>
//                   <DeleteIcon />
//                 </IconButton>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid container>
//             <Grid item xs={2}>
//               <Typography variant="h6">Contact info</Typography>
//               <Typography variant="subtitle1">email</Typography>
//               <Typography variant="subtitle1">password</Typography>
//               <Typography variant="subtitle1">payment type</Typography>
//             </Grid>
//             <Grid item xs={10}>
//               <Typography variant="h6">Nutrition info</Typography>
//               <Typography variant="subtitle1">gender</Typography>
//               <Typography variant="subtitle1">objective</Typography>
//               <Typography variant="subtitle1">weight</Typography>
//               <Typography variant="subtitle1">height</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//         {/* <TextField id="standard-basic" label="Name" />
//         <TextField id="standard-basic" label="Last Name" />
//         <TextField id="standard-basic" label="Email" />
//         <TextField id="standard-basic" label="Password" />
//         <FormControl disabled>
//           <InputLabel id="demo-simple-select-disabled-label">Name</InputLabel>
//           <Select labelId="demo-simple-select-disabled-label" id="demo-simple-select-disabled">
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem>
//           </Select>
//           <FormHelperText>Disabled</FormHelperText>
//         </FormControl>

//         <TextField id="standard-basic" label="Age" />
//         <TextField id="standard-basic" label="Level" />
//         <TextField id="standard-basic" label="Weight" />
//         <TextField id="standard-basic" label="Height" />
//         <TextField id="standard-select-objective" select label="Objective"></TextField>
//         <TextField id="standard-select-rol" select label="Rol"></TextField> */}
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Item Four
//       </TabPanel>
//     </Paper>
//   );
// }

// export default withStyles(styles)(CenteredTabs);
