import React from "react";
import Button from "../components/Button";

interface AboutProps{
    title:string,
    subtitle:string,
    image:string,
    orderL:string,
    orderR:string,
    description:string
}
const About: React.FC<AboutProps> = ({title,subtitle,image,description,orderL = '1',orderR = '2'}) => {
    return (
        <div className="container-fluid py-10 md:py-20 bg-gray-200">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10 lg:flex-row justify-between items-center">
                    <div className={`flex flex-col w-1/2 order-${orderL}`}>
                        <h2 className="font-bold text-3xl text-blue-800 text-left relative before:left-0 
                        before:absolute before:h-[5px] before:-bottom-2 before:w-[50px] before:bg-blue-500">{title}</h2>
                        <h3 className="font-bold text-black text-left mt-10 mb-5">{subtitle}</h3>
                        <p className="text-md text-justify text-black mb-5">{description}</p>
                        <Button classes='bg-blue-700 w-max border-transparent text-white border p-3 px-4 md:px-10 rounded-3xl hover:text-blue-500 hover:bg-white hover:border-blue-500 transition-all duration-300' label="Learn More" link="#" />
                    </div>
                    <div className={`flex jsutify-end w-1/2 order-${orderR}`}>
                        <img src={image} alt="" className="mx-auto" />
                    </div>
                </div>
            </div>
        </div>
  
    );
}

export default About;