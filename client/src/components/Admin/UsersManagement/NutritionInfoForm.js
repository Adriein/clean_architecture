import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function NutritionInfoForm({ input, setInput }) {
  console.log('render the nutrition form');

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Nutrition Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="weight"
            label="Weight"
            name="weight"
            fullWidth
            autoComplete="cc-name"
            value={input.weight}
            onChange={setInput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="height"
            label="Height"
            name="height"
            fullWidth
            autoComplete="cc-number"
            value={input.height}
            onChange={setInput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl required fullWidth>
            <InputLabel id="objective">Objective</InputLabel>
            <Select
              labelId="objective"
              id="objective"
              value={input.objective}
              onChange={setInput}
              name="objective"
            >
              <MenuItem value={'volumen'}>Volumen</MenuItem>
              <MenuItem value={'definicion'}>Definicion</MenuItem>
              <MenuItem value={'normo'}>Normo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl required fullWidth>
            <InputLabel id="injuries">Injuries</InputLabel>
            <Select
              labelId="injuries"
              id="injuries"
              value={input.injuries}
              onChange={setInput}
              name="injuries"
            >
              <MenuItem value={'hombroDerecho'}>Hombro Derecho</MenuItem>
              <MenuItem value={'hombroIzq'}>Hombro Izq</MenuItem>
              <MenuItem value={'cuello'}>Cuello</MenuItem>
              <MenuItem value={'espalda'}>Espalda</MenuItem>
              <MenuItem value={'tricepsDerecho'}>Triceps Derecho</MenuItem>
              <MenuItem value={'tricepsIzq'}>Triceps Izq</MenuItem>
              <MenuItem value={'bicepsDerecho'}>Biceps Derecho</MenuItem>
              <MenuItem value={'bicepsIzq'}>Biceps Izq</MenuItem>
              <MenuItem value={'lumbar'}>Lumbar</MenuItem>
              <MenuItem value={'piernaDerecha'}>Pierna Derecha</MenuItem>
              <MenuItem value={'piernaIzq'}>Pierna Izq</MenuItem>
              <MenuItem value={'none'}>None</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="notes"
            label="Notes"
            name="notes"
            placeholder="Notes"
            multiline
            variant="outlined"
            fullWidth
            value={input.notes}
            onChange={setInput}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default NutritionInfoForm;
