import { Box } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Post from "./post";
export default function Feed(){
    const [liked, setLiked] = useState(false);
    

    return(
        <Box   flex={4} p={2} >
                                    
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     


           
        </Box>
    )
}