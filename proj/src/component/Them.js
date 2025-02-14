


import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function ThemeExample() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: theme.breakpoints.up("md") ? "center" : "flex-start",
        height: 100,
        background: "lightgreen",
      }}
    >
    
    </Box>
  );
}



/*import React from "react";
import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        main:"#1760a5",
        light:"skyblue",
    },
    secondary:{
        main:"#15c630",
       
    },
    secondary:{
        main:"#999",
       
    }

})*/