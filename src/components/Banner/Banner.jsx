import React, { useState } from "react";
import "./Banner.css";
import sampleConvertedImage from "./sar1.jpg"; // Correctly import sar1.jpg

const Banner = () => {
  const [grayscaleImage, setGrayscaleImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setGrayscaleImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleConvertClick = () => {
    setConvertedImage(sampleConvertedImage); // Use the imported sar1.jpg
  };

  return (
    <div className="banner">
      <div className="container">
        <div className="grid">
          {/* Grayscale Image Upload Section */}
          <div className="upload-section">
            <h2 className="title">Upload Grayscale Image</h2>
            <div className="upload-controls">
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="file-input"
              />
              <button
                onClick={handleConvertClick}
                className="convert-button"
                disabled={!grayscaleImage} // Disable if no grayscale image is uploaded
              >
                Convert
              </button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* Image Previews */}
            <div className="image-previews">
              {grayscaleImage && (
                <div className="image-preview">
                  <h3 className="preview-title">Grayscale Image</h3>
                  <br></br>
                  <img
                    src={grayscaleImage}
                    alt="Grayscale Preview"
                    className="preview-image"
                  />
                </div>
              )}
              <br></br>
              <br></br>
              <br></br>
              {convertedImage && (
                <div className="image-preview">
                  <h3 className="preview-title">Converted Image</h3>
                  <br></br>
                  <img
                    src={convertedImage}
                    alt="Converted Preview"
                    className="preview-image"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
