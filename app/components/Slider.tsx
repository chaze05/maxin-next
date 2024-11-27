import Image from 'next/image';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
  return (
    <div className="w-full bg-white p-10">
      <div className="container mx-auto bg-red">
        <AwesomeSlider
        infinite={true}  // Enable continuous sliding
        bullets={false}   // Optional: Hide bullets
        // media={true}      // Optional: Makes the media responsive
      >
        <div className="slide bg-white w-full px-10 h-full items-center justify-center flex">
          <div className="flex justify-center gap-5 w-full px-10 bg-white">
            <div className="view-item w-full justify-center items-center flex  bg-white h-full py-10 px-10">
              <img alt="slide1" className='w-full w-30 h-30' src="https://images.unsplash.com/photo-1721332154373-17e78d19b4a4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
        </div>
        <div className="slide bg-white w-full px-10 h-full items-center justify-center flex">
          <div className="flex justify-center gap-5 w-full px-10 bg-white">
            <div className="view-item w-full justify-center items-center flex  bg-white h-full py-10 px-10">
              <img alt="slide1" className='w-full w-30 h-30' src="https://images.unsplash.com/photo-1640768239887-77479f49a7dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </div>
        </div>
        <div className="slide bg-white w-full px-10 h-full items-center justify-center flex">
          <div className="flex justify-center gap-5 w-full px-10 bg-white">
            <div className="view-item w-full justify-center items-center flex  bg-white h-full py-10 px-10">
              <img alt="slide1" className='w-full w-30 h-30' src="https://images.unsplash.com/photo-1441751212329-8bead656b4b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dHNraXJ0cyUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D" />
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </AwesomeSlider>
      </div>
    </div>

  );
};

export default Slider;
