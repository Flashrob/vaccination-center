import {
  Container,
  Box,
  Button,
  Typography,
  CssBaseline,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import React, { Component } from 'react';
import { DrugAllergySelect } from './DrugAllergySelect/DrugAllergySelect';

function getVaccineCenter() {
  return [
    { name: 'None', id: 0 },
    { name: 'Bukit Batok CC', id: 1 },
    { name: 'Bukit Panjang CC', id: 2 },
    { name: 'Bukit Timah CC', id: 3 },
    { name: 'Outram Park Polyclinic', id: 4 },
  ];
}

export class VaccineRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCenter: 0,
      date: new Date(),
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  handleSelect(event) {
    const state = this.state;
    this.setState({ ...state, selectedCenter: event.target.value });
  }
  handleDateChange(value) {
    const state = this.state;
    this.setState({ ...state, date: value });
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box
            component='form'
            sx={{
              mt: 8,
            }}
          >
            <Typography component='h1' variant='h5'>
              Book a slot
            </Typography>
            <TextField
              margin='normal'
              required
              fullWidth
              id='nric'
              label='NRIC Number'
              name='NRIC'
              autoComplete='nric'
              sx={{ mb: 2 }}
              autoFocus
            />
            <TextField
              required
              fullWidth
              id='name'
              label='Full Name'
              name='name'
              autoComplete='name'
              sx={{ mb: 2 }}
            />
            <DrugAllergySelect />
            <InputLabel id='vaccineCenterLabel'>Vaccine Center</InputLabel>
            <Select
              labelId='vaccineCenterLabel'
              label='Vaccine Center'
              required
              fullWidth
              id='vaccineCenter'
              value={this.state.selectedCenter}
              onChange={this.handleSelect}
              sx={{ mb: 2 }}
            >
              {getVaccineCenter().map((v) => {
                return (
                  <MenuItem key={v.id} value={v.id}>
                    {v.name}
                  </MenuItem>
                );
              })}
            </Select>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label='Slot'
              value={this.state.date}
              onChange={this.handleDateChange}
              required
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Register!
            </Button>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}
