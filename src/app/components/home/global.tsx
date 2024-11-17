import React from "react";
import { Typography, Box } from "@mui/material";

const Globals: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "3rem 1rem",
        backgroundColor: "#000",  // Changed to black
        color: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
        Our Global Presence
      </Typography>
      <div className="relative w-4/5 max-w-[600px] mx-auto">
        <img
          src="/img/world.jpg"
          alt="World Map"
          className="w-full block filter brightness-50"
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <div className="relative w-1/2 max-w-[600px]">
          <img
            src="/img/flags.webp"
            alt="Flags"
            className="w-full block filter"
          />
        </div>
      </Box>
    </Box>
  );
};

export default Globals;
