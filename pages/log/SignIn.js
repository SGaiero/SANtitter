import '@/firebase/client'
import { Box, TextField, Button, Alert } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";



export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user
                router.push('../HomePage')
            })
    }

    return (
        <Box sx={{display:"flex", justifyContent:"center", minHeight:"80vh", alignItems:"center", flexDirection:"column"}}>
            <h2 style={{margin: "20px auto"}}>Sign In</h2>

            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                <TextField variant="standard" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} />
                <TextField type={"password"} variant="standard" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
                <Button type="submit">Send</Button>
                
            </form>
            
            <Button onClick={() => {
                router.push('SignUp')
            }}>Sign Up</Button>

            
        </Box>
    )

}



