import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Styles from '../Styles/Navbar.module.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <AppBar position="sticky">

      <div className={Styles.nav}>

        <div className={Styles.left}>
            <Button className={Styles.btn} href="/" variant="contained">Hospital App</Button>
        </div>

        <div className={Styles.right}>
          <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Book">
            <Button className={Styles.btn} href="/book_appointment" variant="contained">
              <BookmarkAddedIcon />
            </Button>
          </Tooltip>

          <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Create">
            <Button className={Styles.btn} href="/create_appointment" variant="contained">
              <AddCircleIcon />
            </Button>
          </Tooltip>
          <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Sign Up">
            <Button className={Styles.btn} href="/signup" variant="contained"><LogoutIcon /></Button>
          </Tooltip>
          <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title="Sign In">
            <Button className={Styles.btn} href="/login" variant="contained"><LoginIcon /></Button>
          </Tooltip>

        </div>
      </div>
    </AppBar>
  )
}

export default Navbar
