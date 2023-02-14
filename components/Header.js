import { Box, Typography } from "@mui/material";

export default function Header(props){

    const {username, photo} = props;

    return(
        <Box sx={{display: "flex", alignItems:"center", justifyContent: "space-between"}}>
            <h2><span style={{color: "#00acee"}}>SAN</span>titter</h2>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <img src={photo} style={{width: "40px", borderRadius: "50%", margin:"auto 10px"}}/>
                <Typography>{username}</Typography>
            </Box>
        </Box>
    )
}