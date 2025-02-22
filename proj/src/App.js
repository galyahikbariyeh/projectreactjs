import logo from './logo.svg';
import './App.css';

import SettingsIcon from '@mui/icons-material/Settings';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { lightBlue } from '@mui/material/colors';
import Home from './component/home';
import PrimarySearchAppBar from './component/NavBar';
import SideBar from './component/sideBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from './component/myprofile';
import { Box,createTheme,Stack} from "@mui/material";
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';

import ThemeExample from './component/Them';
import Add from './component/add';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
function App() {
  const [mode,setMode]=useState("light")
  const darkTheme= createTheme({
    palette:{
      mode:mode
    }
  })
  return (
   <Router>
     
    <ThemeProvider theme={darkTheme}>
     
    <PrimarySearchAppBar/>
   
   <Box bgcolor={"background.default"} color={"text.primary"}>
  
   
   <Box>
  
      <Stack 
       
        direction="row" 
        spacing={2} 
        justifyContent="space-between"
        alignItems="flex-start" 
        sx={{ width: "100%", padding: 2 }}
      >
         
       
        <Box sx={{ width: "20%", minHeight: "100vh",  textAlign: "center" }}>
          <SideBar setMode={setMode} mode={mode} />
         
        </Box>
        
       
        <Box sx={{ width: "60%", minHeight: "100vh",  textAlign: "center" }}>
          <Feed />
        </Box>
        
        
        <Box sx={{ width: "20%", minHeight: "100vh", textAlign: "center", width: "25vw "}}>
          <Rightbar />
        </Box>
      </Stack>
      <Add/>
    </Box>
  
   </Box>
   </ThemeProvider>
   <Routes>
               
               <Route path="/profile" element={<Profile />} />
              
              
              
             </Routes>
   </Router>
  
  );
}

export default App;



