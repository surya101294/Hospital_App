import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Backdrop, Button, CircularProgress, Link, MenuItem, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';

const initialState = {
    Name: "",
    ImageUrl: "",
    Specialisation: "",
    Experience: 0,
    Location: "",
    Date: "",
    Slots: 0,
    Fees: 0
}
const SpecialisationOption = [
    {
        value: 'Cardiologist',
        label: 'Cardiologist',
    },
    {
        value: 'Dermatologist',
        label: 'Dermatologist',
    },
    {
        value: 'Pediatrician',
        label: 'Pediatrician',
    },
    {
        value: 'Psychiatrist',
        label: 'Psychiatrist',
    },

]
const Appointment = () => {
    const [form, setForm] = React.useState(initialState)
    const [loader, setLoader] = React.useState(false)
    const { Name, ImageUrl, Specialisation, Experience, Location, Date, Slots, Fees } = form

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);
        setLoader(true)

        fetch(`https://confused-rose-pocketbook.cyclic.app/appointement/create`,{
            method:"POST",
            body:JSON.stringify(form),
            headers:{
                "Content-type":"application/json",
            "Authorization":localStorage.getItem("token")
            }
        }).then(res=> res.json())
        .then((res) => {
                console.log(res)
                setLoader(false)
            })
            .catch((err) => {
                console.log(err)
                setLoader(false)
            })
        }
        if(loader)  
        return ( <CircularProgress color="secondary" />)

        return (
            <>
            <Navbar/>
        <div style={{ display: 'flex', flexDirection: 'column', width: '40%', margin: 'auto' }}>
            <br />
            <Typography variant="body2" color="text.secondary" align="center">
            Please Create the Appointment
        </Typography>
        <br />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    required
                    id="filled-required"
                    label="Name"
                    variant="filled"
                    type='text'
                    name='Name'
                    value={Name}
                    onChange={handleChange}
                />


                <TextField
                    id="standard-select-currency"
                    select
                    label="Specialisation"
                    //   defaultValue="EUR"
                    // helperText="Please select your Specialisation"
                    variant="filled"
                    type='text'
                    name='Specialisation'
                    onChange={handleChange}
                >
                    {SpecialisationOption.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    required
                    id="filled-required"
                    label="Image URL"
                    variant="filled"
                    type='text'
                    name='ImageUrl'
                    value={ImageUrl}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Experience"
                    variant="filled"
                    name='Experience'
                    type='number'
                    value={Experience}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Location"
                    variant="filled"
                    type='text'
                    name='Location'
                    value={Location}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="filled-required"
                    // label="Date"
                    variant="filled"
                    type='date'
                    name='Date'
                    value={Date}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Slots"
                    variant="filled"
                    name='Slots'
                    type='number'
                    value={Slots}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Fees"
                    variant="filled"
                    type='number'
                    name='Fees'
                    value={Fees}
                    onChange={handleChange}
                />
                <br />
                <Button variant="contained" color="success" onClick={handleSubmit}>Submit</Button>
            </Box>

        </div>
        </>
    )
}

export default Appointment
