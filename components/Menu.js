import { Box, ListItemButton, ListItemText } from "@mui/material";

export default function Menu(){
    return(
        <Box sx={{maxWidth: "100px"}}>
            <ListItemButton  >
                <ListItemText  primary="Home"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Profile"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Save"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Lists"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Settings"/>
            </ListItemButton>
        </Box>
    )
}