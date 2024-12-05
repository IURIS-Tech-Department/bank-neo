import React from "react";
import { Typography, Button } from "@mui/material";

const MainHome: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center bg-cover bg-center min-h-screen p-8"
    >
      {/* Overlay dengan opacity gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-300"></div>
      
      {/* Teks utama */}
      <div className="relative z-2">
        <Typography variant="h2" className="font-bold text-black">
          Neo
        </Typography>
        <Typography variant="h4" className="font-medium mb-4 text-black">
          Trust, Wealth, Management, and Private Banking
        </Typography>
        <Typography className="mt-4 text-black text-base">
          Of one&apos;s own right, in fiduciary world
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
          Coming Soon
        </Button>
      </div>
    </div>
  );
};

export default MainHome;
