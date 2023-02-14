import { Grid, Box } from "@mui/material";
import Link from "next/link";
import makeStyles from "@mui/material";
import TypingText from "../components/TypingText";
import { useState } from "react";


export default function Welcome(){

    return (
        <Grid>
            <header style={{display: "flex", alignItems:"center", justifyContent:"space-between", margin: 20}}>
                <h2><span style={{color: "#00acee"}}>SAN</span>titter</h2>
                <Box>
                    <Link href={"/log/SignUp"} style={{margin: 10, color:"black"}}>Sign Up</Link>
                    <Link href={'/log/SignIn'} style={{margin: 10, color: "black"}}>Sign In</Link>
                </Box>
            </header>

            <Box display={'flex'} justifyContent={"center"} alignItems={'center'} minHeight={'50vh'} >
                <TypingText text={`Mi twitter casero 🐦.`}/>
            </Box>
            
        </Grid>
    )
}