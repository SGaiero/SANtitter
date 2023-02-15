import { Box, Button } from "@mui/material"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase, onChildAdded, onChildChanged, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Wall(){
   
    const [globalUser, setGlobalUser] = useState([])

    const auth = getAuth()
    const database = getDatabase()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            const tweetsRefDatabase = ref(database,`users/tweets`)
            if(user){
                onValue(tweetsRefDatabase, snapshot => {
                   const keys_tweets = []
                    snapshot.forEach(keys => {
                        keys_tweets.push(keys.val())
                    })
                    setGlobalUser(keys_tweets.slice().reverse())
                })
            }
        })
    }, [])

    return(
        <Box sx={{}}>
            {globalUser.map((tweets, index) => (
                <ul key={index} style={{display: "flex", justifyContent:"flex-start", }}>
                    <li>
                        <span style={{fontWeight: "bold"}}>{tweets.username}</span>
                        <br style={{margin: "10px"}}/>
                        <span style={{fontWeight: 300}}>{tweets.message}</span>
                    </li>
                </ul>
            ))}
        </Box>
    )
}