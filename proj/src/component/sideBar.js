import { Box, List, ListItem,ListItemButton,ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from "react";
import Home from "./home";
export default function SideBar({mode,setMode}){
   
    return(
       <Box   flex={1}  p={2} sx={{display:{xs:"none" , sm:"block"}}}>
        <Box position={"fixed"}>
       <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="">
               
                <ListItemIcon>
                <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Homepage"/>
            </ListItemButton>

        </ListItem>
       </List>
       <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="">
                <ListItemIcon>
                <ArticleIcon/>
                </ListItemIcon>
                <ListItemText primary="Pages"/>
            </ListItemButton>

        </ListItem>
       </List>
       <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="">
                <ListItemIcon>
                <GroupIcon/>
                </ListItemIcon>
                <ListItemText primary="Groups"/>
            </ListItemButton>

        </ListItem>
       </List>
       <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="">
                <ListItemIcon>
                <WorkIcon/>
                </ListItemIcon>
                <ListItemText primary="Work"/>
            </ListItemButton>

        </ListItem>
       </List>
       <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="">
                <ListItemIcon>
                <PeopleAltIcon/>
                </ListItemIcon>
                <ListItemText primary="Friends"/>
            </ListItemButton>

        </ListItem>
       </List>
       <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="">
                <ListItemIcon>
                <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Settings"/>
            </ListItemButton>

        </ListItem>
       </List>
       <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="">
                <ListItemIcon>
                <AccountBoxIcon/>
                </ListItemIcon>
                <ListItemText primary="profile"/>
            </ListItemButton>

        </ListItem>
       </List>
       <List>
        <ListItem disablePadding>
            <ListItemButton component="a" href="">
                <ListItemIcon>
                <ModeNightIcon/>
                </ListItemIcon>
               <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
               
            </ListItemButton>

        </ListItem>
       </List>
       </Box>
       </Box>
      
    )
}