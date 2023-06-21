import React from "react";
import { Typography, AppBar, Toolbar, Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Navbar({ changeTheme, defTheme }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Typography
              variant="h5"
              color={defTheme === "light" ? "inherit" : "secondary"}
            >
              Sorting Algo Visualizer
            </Typography>
          </Box>
          <IconButton color="inherit" onClick={changeTheme}>
            {defTheme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
