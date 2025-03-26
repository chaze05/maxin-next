import React from 'react'
import Iconbox from '../components/Iconbox'
interface FeatureProps{
    title:string,
    description:string,
    order1:string,
    order2:string,
    order3:string,
}


const Feature: React.FC<FeatureProps> = ({title,description,order1 = 1,order2=2,order3=3}) => {
  return (
    <div className="container-fluid py-10 md:py-20 bg-gray-200">
        <div className="container mx-auto">
            <h2 className="font-bold text-3xl text-blue-900 text-center relative before:left-0 before:right-0 before:mx-auto
                            before:absolute before:h-[5px] before:-bottom-5 before:w-[50px] before:bg-blue-500">{title}</h2>
            <p className='p-10 text-center text-black text-md max-w-2xl mx-auto'>{description}</p>
            <div className="flex gap-4 items-center flex-col lg:flex-row">
                <div className={`flex flex-col px-5 border-0 order-${order1}`}>
                <Iconbox  align="right" orderl={1} orderr={2}  image="https://chaze05.github.io/maxin/img/heart.png" label="User Friendly" 
                    description="It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout." />
                <Iconbox  align="right" orderl={1} orderr={2}  image="https://chaze05.github.io/maxin/img/heart.png" label="User Friendly" 
                    description="It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout." />
                <Iconbox  align="right" orderl={1} orderr={2}  image="https://chaze05.github.io/maxin/img/heart.png" label="User Friendly" 
                    description="It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout." />
                
                </div>
                <div className={`flex flex-col order-${order1} w-1/2`}>
                    <img src="https://chaze05.github.io/maxin/img/iphone2.png" alt="" />
                </div>
                <div className={`flex flex-col order-${order1}`}>
                    <Iconbox  align="left" orderl={1} orderr={2}  image="https://chaze05.github.io/maxin/img/heart.png" label="User Friendly" 
                    description="It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout." />
                    <Iconbox  align="left" orderl={1} orderr={2}  image="https://chaze05.github.io/maxin/img/heart.png" label="User Friendly" 
                    description="It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout." />
                    <Iconbox  align="left" orderl={1} orderr={2}  image="https://chaze05.github.io/maxin/img/heart.png" label="User Friendly" 
                    description="It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout." />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature