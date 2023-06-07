import { Box } from "@mui/system";
import React from "react";
import { Sidebar, Navbar } from "../components";
import { Toolbar } from "@mui/material";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      {/* navbar drawerWidth */}
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      {/* sidebar drawerWidth */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* toolbar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
