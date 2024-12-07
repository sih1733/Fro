import React from "react";
import "./Banner2.css";

const Banner2 = ({ colorizedImage }) => {
  return (
    <div className="banner2 bg-black text-white pb-12 relative z-50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Chromatic Image Section */}
          <div>
            {colorizedImage ? (
              <img
                src={colorizedImage}
                alt="Colorized Preview"
                data-aos="zoom-in"
                className="colorized-image w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            ) : (
              <p className="placeholder-text text-center">
                Upload a grayscale image to view its colorized version.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
