
import {Avatar, Box, Button, FormControl, Input, InputAdornment, TextField} from '@mui/material'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, update, push, onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function Thinking(props){
    const {photo, username} = props;
    const [thinking, setThinking] = useState('')
    

    const database = getDatabase()
    const auth = getAuth()
    const user = auth.currentUser;



    const savePosts = (e) => {
        e.preventDefault();
        const refTweetDatabase = ref(database, `users/tweets`)
        push(refTweetDatabase, {
            username,
            message: thinking
        })
    }
    
    return(
        <Box>
            <form onSubmit={savePosts} >
                <Input
                    sx={{fontSize: "25px"}}
                    startAdornment={
                        <InputAdornment sx={{margin: "10px"}}>
                            <Avatar alt={username} src={photo}  />
                        </InputAdornment>
                    }
                    placeholder="What are you thinking?"
                    id="input_thinking"
                    onChange={e => {setThinking(e.target.value)}}
                />
                
                <Box sx={{display:"flex", justifyContent:"flex-end"}}>
                    <Button type='submit'  sx={{fontSize:"15px"}}>Send</Button>
                </Box>
            </form>
        </Box>
    )
}