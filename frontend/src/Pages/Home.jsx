import Features from '../Components/Features'
import Feedback from '../Components/Feedback'
import Navbar from '../Components/Navbar'
import React from 'react'
import Portfolio from '../Components/Portfolio'
import Styles from '../Styles/Home.module.css'
import { Box } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <Navbar/>
    {/* <div className={Styles.Container}>
    <div className={Styles.leftContainer}>
      <Features/>
      <Feedback/>

    </div>
    <div className={Styles.rightContainer}> */}
      <Portfolio/>

    {/* </div> */}

    {/* </div> */}
    </Box>
  )
}

export default Home
