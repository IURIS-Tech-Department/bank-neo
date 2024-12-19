import React from "react";
import { Typography, Button } from "@mui/material";

const Banking: React.FC = () => {
  return (
    <div
      className="relative flex flex-col justify-center min-h-screen p-8"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/Neo bank - Video 1.mov" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 ml-20">
        <Typography variant="h1" className="font-bold italic text-white">
          neo
        </Typography>
        <Typography variant="h5" className="font-medium mb-4 text-white">
          Banking
          Outside The Matrix
        </Typography>
        <Typography className="mt-4 text-white text-base">
          Elevate Your Business with Smarter Banking
        </Typography>
        {/* Button */}
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
