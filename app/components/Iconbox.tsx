
import React, {useState} from 'react';
import Link from 'next/link';

interface IconboxProps {
    image:string,
    label:string,
    description: string,
    orderl:number,
    orderr:string | number,
    align:string
}

  
const Iconbox: React.FC<IconboxProps> = ({image,label,description,orderl=1,orderr=2,align="right"}) => {
    return (
        <div className={`flex flex-col rounded-md items-start my-5  py-5 hover:bg-gray-100 transition-colors duration-200 px-3
        lg:flex-row`}>
            <div className={`flex flex-col px-5 order-${orderl - 1}  md:order-${orderl}`}>
                <h2 className={`font-bold mb-3 text-blue-500 text-right capitalize  px-4 md:text-${align}`}>{label}</h2>
                <p className={`text-md mt-auto text-black px-4 text-right md:text-${align}`}> {description} </p>
            </div>
            <img src={image} alt="" className={`mx-auto order-${orderl + 1} mb-4 md:order-${orderr}`} />
        </div>
    );
};

export default Iconbox;
