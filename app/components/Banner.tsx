
import React from 'react';
import Button from './Button';

interface BannerProps {
    heading:string,
    description:string,
    image:string
}

const Banner: React.FC<BannerProps> = ({heading = "This is the Heading",description="This is the description",image}) => {

    return (
        <div className="flex justify-between items-center py-5 md:py-20 flex-row flex-wrap px-2 md:px-5">
            <div className="flex flex-col px-5 w-full my-5 md:w-1/2 md:pr-5 mb-10 md:mb-0">
                <h1 className="text-5xl font-bold text-left">{heading}</h1>
                <p className="py-5 text-md">{description}</p>
                <div className="flex gap-5">
                    <Button classes='bg-white border p-3 px-4 md:px-10 rounded-3xl text-black hover:bg-blue-700 hover:text-white transition-all duration-300' label="Try Now" link="#" />
                    <Button classes='bg-white border p-3 px-4 md:px-10 rounded-3xl text-black hover:bg-blue-700 hover:text-white transition-all duration-300' label="Learn More" link="#" />
                </div>
            </div>
            <div className="flex flex-wrap flex-col w-full px-5 justify-center px-10 md:w-1/2 md:pl-10">
                <img src={image} alt="" className='w-full'/>
            </div>
        </div>
    );
};

export default Banner;
