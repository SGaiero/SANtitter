import '@/firebase/client';
import { Box, TextField, Button } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set, onValue, push, } from 'firebase/database';
import { useState } from "react";
import { useRouter } from "next/router";





export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')


    const router = useRouter()
    const database = getDatabase()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user

                updateProfile(user , {
                    displayName: username,
                    photoURL: 'https://i.pravatar.cc/300'
                })

                set(ref(database, 'users/' + user.uid), {
                    username: username,
                    email: email,
                    
                })
                
                router.push('./SignIn')

                              
            })
    }


    return (
        <Box sx={{display:"flex", justifyContent:"center", minHeight:"80vh", alignItems:"center", flexDirection:"column"}}>
            <h2 style={{margin: "20px auto"}}>Sign Up</h2>

            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                <TextField variant="standard" placeholder="Username" name="user" onChange={e => setUsername(e.target.value)}/>
                <TextField variant="standard" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} />
                <TextField type={"password"} variant="standard" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
                <TextField type={'password'} variant="standard" placeholder="Confirm password" name="confirmPassword" onChange={e => setConfirmPassword(e.target.value)} />
                <Button type="submit">Send</Button>
            </form>

            <Button onClick={() => {
                router.push('SignIn')
            }}>Sign In</Button>
        </Box>
    )
}