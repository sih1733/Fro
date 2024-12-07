import React, { useState } from "react";
import Banner from "./Banner"; // Banner1 component
import Banner2 from "./Banner2"; // Banner2 component

const SARColorization = () => {
  const [grayscaleImage, setGrayscaleImage] = useState(null);
  const [colorizedImage, setColorizedImage] = useState(null);

  // Function to handle image upload and set the grayscale image
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setGrayscaleImage(imageUrl);
      setColorizedImage(null); // Reset colorized image when a new grayscale image is uploaded
    }
  };

  // Function to handle the conversion (placeholder logic for now)
  const handleConvert = () => {
    if (grayscaleImage) {
      // Placeholder: Replace this with actual model output for colorization
      setColorizedImage(grayscaleImage); // Simulate colorization by setting the same image
    } else {
      alert("Please upload a grayscale image first.");
    }
  };

  return (
    <div className="sar-colorization">
      {/* Banner1: Upload Grayscale Image */}
      <Banner
        handleUpload={handleUpload}
        grayscaleImage={grayscaleImage}
        handleConvert={handleConvert}
      />

      {/* Banner2: Display Chromatic Image */}
      <Banner2 colorizedImage={colorizedImage} />
    </div>
  );
};

export default SARColorization;
