import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdMessage, MdCall } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-5">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">    
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-2">Contact US</h1>
              </div>
              <div className=" space-y-3">
                <div className="flex items-center gap-2">
                  <HiLocationMarker />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdMessage />
                  <p>abc@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <p>+91 1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center py-6 border-t-2 border-gray-400">
            <span className="text-sm text-gray-400"> 
              copyright &copy; 2024 by MH SpaceTech
            </span>
            <div className="flex items-center justify-center gap-4 pb-4">
              <a href="#">
              <FaLinkedin className="text-3xl text-gray-400"/>
              </a>
              <a href="#">
              <FaInstagram className="text-3xl text-gray-400"/>
              </a>
              <a href="#">
              <FaFacebook className="text-3xl text-gray-400"/>
              </a>
            </div>
            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
