
import React, {useState} from 'react';
import Link from 'next/link';

interface ButtonProps {
    classes:string,
    image:string,
    count:string,
    label: string,
}

  
const InfoBox: React.FC<ButtonProps> = ({classes,image,count,label}) => {
    return (
        <div className={`flex rounded-md items-center gap-5  relative mx-auto ${classes}`}>
            <img src={image} alt="" />
            <div className="flex flex-col">
                <span className="text-blue-500 text-md font-bold">{count}</span>
                <span className="text-gray-400 font-semibold">{label}</span>
            </div>
        </div>
    );
};

export default InfoBox;
