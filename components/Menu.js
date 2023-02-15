import { Box, Link, ListItemButton, ListItemText, Menu as MenuMui, MenuItem } from "@mui/material";
import { useState } from "react";

export default function Menu(){

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <ListItemText
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} 
                    primary="Settings"
                    />
                    <MenuMui
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}><Link sx={{color: "black", textDecoration:"none"}} href="/config/Profile">Profile</Link></MenuItem>
                        <MenuItem onClick={handleClose}>Theme</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </MenuMui>
            </ListItemButton>
        </Box>
    )
}