import React from "react";
import { Typography, Button } from "@mui/material";

const MainHome: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center bg-cover bg-center min-h-screen p-8"
      style={{ backgroundImage: 'url("/img/bg-finance.jpg")' }}
    >
      {/* Overlay dengan opacity gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-1"></div>
      
      {/* Teks utama */}
      <div className="relative z-2">
        <Typography variant="h2" className="font-bold text-white">
          Banking
        </Typography>
        <Typography variant="h2" className="font-bold mb-4 text-white">
          Outside The Matrix
        </Typography>
        <Typography className="mt-4 text-white text-base">
          Apply in 10 minutes for bussines banking that transform how operate
        </Typography>
        {/* edit */}
        <Button
          variant="outlined"
          sx={{
            borderColor: 'white',
            color: 'white',
            marginTop: '32px', 
            '&:hover': {
              borderColor: 'white',
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

export default MainHome;
