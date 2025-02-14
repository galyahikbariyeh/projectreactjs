/*import { Box } from "@mui/material";
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
 export default  function Post(){
     const [liked, setLiked] = useState(false);
    return(
        <>
 <Card  sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
        <IconButton onClick={() => setLiked(!liked)}>
          <FavoriteIcon sx={{ color: liked ? "#e74c3c" : "gray" }} />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
         
       
       
       
      </CardActions>

    </Card>
        
        </>
    )
 }*/
 //no

   /* import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function Post() {
  const [liked, setLiked] = useState(false);
  const [title, setTitle] = useState("Aurora Borealis");
  const [description, setDescription] = useState(
    "This is a beautiful view of the northern lights."
  );
  const [image, setImage] = useState(
    "https://source.unsplash.com/400x300/?nature,aurora"
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Card sx={{ maxWidth: "100%", width: "700px", margin: 5 }}>
      <CardMedia
        component="img"
        height="200"
        width={"100"}
        image={"https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC"}
        alt="Card Image"
      />
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              fullWidth
              label="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="dense"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ marginTop: 1 }}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </>
        )}
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton onClick={() => setLiked(!liked)}>
          <FavoriteIcon sx={{ color: liked ? "#e74c3c" : "gray" }} />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}*/
/*ok*/
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function Post() {
  const [liked, setLiked] = useState(false);
  const [title, setTitle] = useState("Aurora Borealis");
  const [description, setDescription] = useState(
    "This is a beautiful view of the northern lights."
  );
  const [image, setImage] = useState(
    "https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [tempImage, setTempImage] = useState(image); // Temporary state for image

  const handleSave = () => {
    setImage(tempImage); // Update actual image URL
    setIsEditing(false);
  };

  return (
    <Card sx={{ maxWidth: "100%", width: "700px", margin: 5, padding: 2 }}>
      <CardMedia component="img" height="200" image={image} alt="Card Image" />
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              fullWidth
              label="Image URL"
              value={tempImage} // Temporary value for live preview
              onChange={(e) => setTempImage(e.target.value)}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="dense"
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="dense"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ marginTop: 1 }}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </>
        )}
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton onClick={() => setLiked(!liked)}>
          <FavoriteIcon sx={{ color: liked ? "#e74c3c" : "gray" }} />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}

/*for edit and add*/
/*import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

export default function PostManager() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    image: "",
  });

  
  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  
  const handleAddOrUpdatePost = () => {
    if (editingPost) {
     
      setPosts(
        posts.map((post) =>
          post.id === editingPost.id ? { ...newPost, id: post.id } : post
        )
      );
      setEditingPost(null);
    } else {
      
      setPosts([...posts, { ...newPost, id: Date.now(), liked: false }]);
    }
    setNewPost({ title: "", description: "", image: "" }); // Reset input fields
  };

 
  const handleEditPost = (post) => {
    setNewPost(post);
    setEditingPost(post);
  };

  // Delete a post
  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Toggle like
  const toggleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mb: 2 }}>
        <TextField
          label="Title"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Description"
          name="description"
          value={newPost.description}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Image URL"
          name="image"
          value={newPost.image}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          onClick={handleAddOrUpdatePost}
          startIcon={editingPost ? <EditIcon /> : <AddIcon />}
        >
          {editingPost ? "Update Post" : "Add Post"}
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
        {posts.map((post) => (
          <Card key={post.id} sx={{ width: "350px", padding: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image={post.image || "https://source.unsplash.com/400x300/?nature"}
              alt="Post Image"
            />
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {post.description}
              </Typography>
            </CardContent>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton onClick={() => toggleLike(post.id)}>
                <FavoriteIcon sx={{ color: post.liked ? "#e74c3c" : "gray" }} />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
              <IconButton onClick={() => handleEditPost(post)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeletePost(post.id)}>
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}*/






















