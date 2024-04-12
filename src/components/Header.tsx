import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  const handleCreatedByClick = () => {
    window.open("https://github.com/chhavi48", "_blank");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CSS Code Generator
          </Typography>

          <Typography variant="body1" component="div">
            Initiated by{" "}
            <a
              href="https://example.com/about"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
                color: "#C2EA12",
                textDecoration: "underline",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleCreatedByClick();
              }}
            >
              Chhavi Srivastva
            </a>
            💁‍♀️
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
