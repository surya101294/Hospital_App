import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SyncIcon from '@mui/icons-material/Sync';
import Styles from '../Styles/Navbar.module.css'
import { CircularProgress } from '@mui/material';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function CardItem() {
    const [data, setData] = React.useState([])
    const [loader, setLoader] = React.useState(false)

    const getData = async () => {
        setLoader(false)

        fetch(`https://confused-rose-pocketbook.cyclic.app/appointement`, {
            method:"GET",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                setData(res.data)
                setLoader(false)
            })
            .catch((err) => {
                setLoader(false)
                console.log(err)
            })
    }
    React.useEffect(() => {
        getData()
    }, [])

    if (loader) return ( <CircularProgress color="secondary" />)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {data.length>0 && data.map((card) => (
                        
                            <Grid item key={card} xs={8} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        // sx={{
                                        //     // 9:9,
                                        //     pt: '50%',
                                        // }}
                                        // image="https://source.unsplash.com/random"
                                        image={card.ImageUrl}
                                        className={Styles.img}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.Name}
                                        </Typography>
                                        <Typography>
                                            Specialisation : {card.Specialisation}
                                        </Typography>
                                        <Typography>
                                            Experience : {card.Experience}
                                        </Typography>
                                        <Typography>
                                            Location : {card.Location}
                                        </Typography>
                                        <Typography>
                                            Date : {card.Date}
                                        </Typography>
                                        <Typography>
                                            Slots : {card.Slots}
                                        </Typography>
                                        <Typography>
                                            Fees : {card.Fees}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions> */}
                                    <Button size="large" variant="contained">Book Now</Button>
                                    {/* <Button size="small">Edit</Button> */}
                                    {/* </CardActions> */}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}