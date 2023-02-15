import '@/firebase/client'
import Header from '@/components/Header';
import { Box, Button, Grid } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getDatabase} from 'firebase/database'
import { useState } from 'react';
import Menu from '@/components/Menu';
import Wall from '@/components/Wall';
import News from '@/components/News';
import Thinking from '@/components/Thinking';


export default function HomePage(){
    const [username, setUsername] = useState('')
    const [photo, setPhoto] = useState('')

    const auth = getAuth()
    const database = getDatabase()
    const user = auth.currentUser;

    onAuthStateChanged(auth, user => {
        if(user){
            setUsername(user.displayName)
            setPhoto(user.photoURL)
            
        }
    })


    

    return(
        <Box sx={{margin: "20px"}}>
            <header>
                <Header username={username} photo={photo}/>
            </header>
            <Grid container sx={{display:"flex"}}>
                <Grid item xs >
                    <Menu/>
                </Grid>
                <Grid item xs={3} sx={{display: "flex", flexDirection: "column",}}>
                    <Thinking username={username} photo={photo} user={user}/>
                    <Wall user ={user}/>
                </Grid>
                <Grid item xs>
                    
                </Grid>
            </Grid>
        </Box>


    )
}

