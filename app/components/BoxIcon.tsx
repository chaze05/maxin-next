
import React, {useState} from 'react';
import Link from 'next/link';

interface BoxIconProps {
    image:string,
    label:string,
    description: string,
}

  
const InfoBox: React.FC<BoxIconProps> = ({image,label,description}) => {
    return (
        <div className={`flex rounded-md items-center border border-gray-300 flex-col py-5 hover:bg-gray-100 transition-colors duration-200`}>
            <img src={image} alt="" className='mx-auto mb-4'/>
            <h2 className="text-center font-bold my-2 text-blue-500 capitalize">{label}</h2>
            <p className="text-center text-md mt-auto text-black px-4">{description}</p>
        </div>
    );
};

export default InfoBox;
