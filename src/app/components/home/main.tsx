import React from "react";
import { Typography, Button } from "@mui/material";

const MainHome: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center bg-cover bg-center min-h-screen p-8"
      style={{ backgroundImage: 'url("/img/banner.webp")' }}
    >
      {/* Overlay dengan opacity gelap */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-1"></div>
      
      {/* Teks utama */}
      <div className="relative z-2">
        <Typography variant="h2" className="font-bold mb-4 text-white">
          IURIS -
        </Typography>
        <Typography variant="h5" className="text-white">
          Trust, Wealth Management, and Private Banking
        </Typography>
        <Typography className="mt-4 italic text-white text-base">
          Of one’s own right, in a fiduciary world
        </Typography>
        {/* edit */}
        <Button
          variant="outlined"
          className="text-white border-white mt-6 py-2 px-8"
        >
          COMING SOON
        </Button>
      </div>
    </div>
  );
};

export default MainHome;
