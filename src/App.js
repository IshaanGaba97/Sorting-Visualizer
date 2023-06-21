import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Navbar from "./components/Navbar";
import CenterDiv from "./components/CenterDiv";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function App() {
  const [defTheme, setDefTheme] = useState("dark");
  const changeTheme = () => {
    setDefTheme(defTheme === "light" ? "dark" : "light");
  };
  const theme = createTheme({
    palette: {
      mode: defTheme,
    },
  });

  const isPhone = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper style={{ minHeight: "100vh" }}>
          <Navbar defTheme={defTheme} changeTheme={changeTheme} />
          <CenterDiv isPhone={isPhone} defTheme={defTheme} />
        </Paper>
      </ThemeProvider>
    </>
  );
}
