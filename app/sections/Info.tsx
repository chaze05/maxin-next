'use client';
import React from 'react';
import InfoBox from '../components/InfoBox'
import BoxIcon from '../components/BoxIcon'
const Info: React.FC = () => {
  return (
    <div className="container-fluid bg-white ">
        <div className="container mx-auto py-10">
            <div className="flex bg-white relative z-2 py-10 max-w-4xl rounded-lg mx-auto -top-20 shadow-md shadow-gray-500">
                <InfoBox classes='' image='https://chaze05.github.io/maxin/img/apple-icon.png' label="Apple Users" count='1550' />
                <InfoBox classes='' image='https://chaze05.github.io/maxin/img/android-icon.png' label="Android Users" count='2560' />
                <InfoBox classes='' image='https://chaze05.github.io/maxin/img/windows-icon.png' label="Windows Users" count='1220' />
            </div>
            <div className="flex gap-10 flex-col md:flex-row">
                <BoxIcon image='https://chaze05.github.io/maxin/img/design.png' label='awesome design' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                <BoxIcon image='https://chaze05.github.io/maxin/img/settings.png' label='easy to customize' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                <BoxIcon image='https://chaze05.github.io/maxin/img/pen.png' label='easy to use' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
            </div>
        </div>
    </div>
  );
};

export default Info;
