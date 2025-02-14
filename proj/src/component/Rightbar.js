import { Box ,Avatar, AvatarGroup, ImageList,ImageListItem,List,ListItemAvatar,ListItem,Divider,ListItemText} from "@mui/material";
import Typography from '@mui/material/Typography';


import React from "react";

export default function Rightbar(){
    return(
       <Box   flex={2} p={2}>
        <Box position={"fixed"} >
       <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Online Friends</Typography>
       <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://miro.medium.com/v2/resize:fit:1400/1*-1ayjN8xj2pcD023W7OfGA.png" />
  <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
  <Avatar alt="Cindy Baker" src="https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg" />
  <Avatar alt="Agnes Walker" src="https://pixlr.com/images/generator/text-to-image.webp" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
  <Avatar alt="Remy Sharp" src="https://www.uopeople.edu/wp-content/uploads/2019/01/The-Basics-of-Computer-Science.webp" />
  <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9M9ra5dobm6HvD2XtdrAZLJPDKi1latJMg&s" />
  <Avatar alt="Cindy Baker" src="https://qmedcenter.com/wp-content/uploads/2023/02/Vector-cheerful-doctor-cartoon-character-isolated-on-white.webp" />
  <Avatar alt="Agnes Walker" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100}>
   Latest Photos
</Typography>
<ImageList cols={3} rowHeight={100} gap={5} >
<ImageListItem>
   <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
</ImageListItem>
<ImageListItem>
   <img src="https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo=" alt=""/>
</ImageListItem>
<ImageListItem>
   <img src="https://static.vecteezy.com/system/resources/thumbnails/026/746/427/small_2x/illustration-image-nature-and-sustainability-eco-friendly-living-and-conservation-concept-art-of-earth-and-animal-life-in-different-environments-generative-ai-illustration-free-photo.jpg" alt=""/>
</ImageListItem>
</ImageList>
<Typography variant="h6" fontWeight={100} mt={2} >Latest conservation</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
       </Box>
    )
}