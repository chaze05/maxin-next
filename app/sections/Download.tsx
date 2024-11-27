import React from 'react'

const Download = () => {
  return (
    <div className="container-fluid bg-blue-900 py-10">
        <div className="container flex flex-col justify-center mx-auto">
            <h3 className="font-bold text-center text-white text-3xl">Download Available Now</h3>
            <p className='my-10 text-white text-center max-w-2xl mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour randomised.</p>
            <div className="flex flex-col md:flex-row gap-5 max-w-5xl w-full mx-auto my-7 justify-center md:justify-between items-center">
                <div className="flex items-center gap-5 my-2 md:justify-between shadow-lg  px-5">
                    <img src="https://chaze05.github.io/maxin/img/wapple.png" alt="" />
                    <span className="text-white text-2xl font-bold">App Store</span>
                </div>
                <div className="flex items-center gap-5 my-2 md:justify-between shadow-lg ">
                    <img src="https://chaze05.github.io/maxin/img/wplaystore.png" alt="" />
                    <span className="text-white text-2xl font-bold">Play Store</span>
                </div>
                <div className="flex items-center gap-5 my-2 md:justify-between shadow-lg ">
                    <img src="https://chaze05.github.io/maxin/img/wwindows.png" alt="" />
                    <span className="text-white text-2xl font-bold">Windows</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download