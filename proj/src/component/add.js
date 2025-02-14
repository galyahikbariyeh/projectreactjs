import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Avatar, Stack, styled } from "@mui/material";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Post from "./post";
const StyledModal= styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox= styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
    
   
})
export default function Add(){
  
    const[open,setOpen]=useState(false)
    return(
        <>
        <Tooltip onClick={e=>setOpen(true)}        title="" sx={{position:"fixed",bottom:20, left:{xs:"calc(50%-25px)", md:30}}}>
        <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
</Tooltip>
<StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"}  p={3}  borderRadius={5}>
        <Typography variant="h6" color="gray" textAlign={"center"}>Add Post</Typography>
        <UserBox>
      
            <Avatar
            src=""
            sx={{width:30, height:30}}
            />
           < Typography fontWeight={500} variant="span" >galyah
           </Typography>
        </UserBox>
        
        <TextField
        sx={{width:"100%"}}
          id="standard-multiline-static"
         
          multiline
          rows={3}
          placeholder="What are you thinking ? "
          variant="standard"
        />
        <Stack direction={"row"} gap={1} mt={2} mb={3}>
           <EmojiEmotionsIcon color="primary"/>
          <ImageIcon color="secondary"/>
          <VideoCameraBackIcon color="success"/>
            <PersonAddAlt1Icon color="error"/>
        </Stack>
        <ButtonGroup fullWidth    variant="contained" aria-label="Basic button group">
            <Button sx={{width:"100px"}}>Post    </Button>
            <Button><DateRangeIcon/></Button>
           
</ButtonGroup>
        </Box>
      </StyledModal>
     
        </>
    )
}



