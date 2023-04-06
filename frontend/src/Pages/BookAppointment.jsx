import React, { useState } from 'react'
import CardItem from '../Components/Card'
import { Box, Input, MenuItem, Select, TextField } from '@mui/material'
import Navbar from '../Components/Navbar'
import SearchIcon from '@mui/icons-material/Search';

// const SpecialisationOption = [
//     {
//         value: 'Cardiologist',
//         label: 'Cardiologist',
//     },
//     {
//         value: 'Dermatologist',
//         label: 'Dermatologist',
//     },
//     {
//         value: 'Pediatrician',
//         label: 'Pediatrician',
//     },
//     {
//         value: 'Psychiatrist',
//         label: 'Psychiatrist',
//     },

// ]

const BookAppointment = () => {
// const [filter, setFilter]= useState("")
// const [loader,setLoader] = useState(false)

//     const handleChange = (e) => {
//         setFilter(e.target.value)
//         getData()
//     }

//     const getData = () => { 
//         setLoader(true)

//         fetch(`localhost:8080/appointement`,{
//             method:"GET",
//             headers:{
//                 "Content-type":"application/json"
//             }
//         }).then(res=> res.json())
//         .then((res) => {
//                 console.log(res)
//                 setLoader(false)
//             })
//             .catch((err) => {
//                 console.log(err)
//                 setLoader(false)
//             })
//         }
// getData()

    return (
        <div>
            <Navbar />
            <Input type='text' placeholder='Search' /><SearchIcon />
            {/* <Box>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Specialisation"
                    // variant="filled"
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
            </Box> */}

            <CardItem />
        </div>
    )
}

export default BookAppointment
