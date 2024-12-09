

import React from "react";
import { Typography, Button } from "@mui/material";

const Banking: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center bg-cover bg-center min-h-screen p-8"
      
    >
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gray-300" 
        style={{
          backgroundImage: "url('img/bg-finance.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-2">
        <Typography variant="h1" className="font-bold text-white">
          neo
        </Typography>
        <Typography variant="h5" className="font-medium mb-4 text-white">
          Banking
          Outside The Matrix
        </Typography>
        <Typography className="mt-4 text-white text-base">
          Elevate Your Business with Smarter Banking
        </Typography>
        {/* edit */}
        <Button
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',
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
