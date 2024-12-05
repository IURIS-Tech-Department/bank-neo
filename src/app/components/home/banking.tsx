import React from "react";
import { Typography, Button } from "@mui/material";

const MainHome: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center bg-cover bg-center min-h-screen p-8"
      style={{ backgroundImage: 'url("/img/bg-finance.jpg")' }}
    >
      {/* Overlay dengan opacity gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 z-1"></div>
      
      {/* Teks utama */}
      <div className="relative z-2">
        <Typography variant="h2" className="font-bold text-black">
          Neo
        </Typography>
        <Typography variant="h4" className="font-medium mb-4 text-black">
          Trust, Wealth, Managemenet, and Private Banking
        </Typography>
        <Typography className="mt-4  italic text-black text-base">
          of one&apos;s own right in a fiducairy world
        </Typography>
        {/* edit */}
        <Button
          variant="outlined"
          sx={{
            borderColor: 'black',
            color: 'black',
            marginTop: '32px', 
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            },
          }}
        >
          Comming Soon 
        </Button>
      </div>
    </div>
  );
};

export default MainHome;
