

import React from "react";
import { Typography, Button } from "@mui/material";

const Banking: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center bg-cover bg-center min-h-screen p-8"
    >
      {/* Overlay dengan opacity gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-300"></div>
      
      {/* Teks utama */}
      <div className="relative z-2">
        <Typography variant="h2" className="font-bold text-black">
          Banking
        </Typography>
        <Typography variant="h2" className="font-bold mb-4 text-black">
          Outside The Matrix
        </Typography>
        <Typography className="mt-4 text-black text-base">
          Apply in 10 minutes for bussines banking that transform how operate
        </Typography>
        {/* edit */}
        <Button
          variant="outlined"
          sx={{
            borderColor: 'black',
            color: 'black',
            marginTop: '32px', 
            '&:hover': {
              borderColor: 'black',
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            },
          }}
        >
          Open Account
        </Button>
      </div>
    </div>
  );
};

export default Banking;
