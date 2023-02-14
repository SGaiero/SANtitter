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
                    console.log(keys_tweets, "keeys tweets")
                    setGlobalUser(keys_tweets.slice().reverse())
                    

                })
            }
        })
    }, [])

    console.log(globalUser, "global user")

    return(
        <Box display={"flex"} sx={{display: "flex", flexDirection: "column"}}>
            {globalUser.map((tweets, index) => (
                <ul key={index}>
                    <li>{tweets.username}: {tweets.message}</li>
                </ul>
            ))}
        </Box>
    )
}