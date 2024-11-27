'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';


const Links = [
    {
        label:'Home',
        href:'#',
    },
    {
        label:'About',
        href:'#',
    },
    {
        label:'Feature',
        href:'#',
    },
    {
        label:'Screenshot',
        href:'#',
    },
    {
        label:'Team',
        href:'#',
    },
    {
        label:'Blog',
        href:'#',
    },
    {
        label:'Contact',
        href:'#',
    },
]
const Hero: React.FC = () => {
  return (
    <div className="container-fluid"   style={{ backgroundImage: "url('https://chaze05.github.io/maxin/img/section-bg.png')", backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>
        <div className="container mx-auto py-10">
            <Navbar logo="https://chaze05.github.io/maxin/img/logo.png" links={Links} />
            <Banner heading="We Are Always Trying Best For Our User" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
eleifend nibh vel ex luctus vestibulum." image="https://chaze05.github.io/maxin/img/phone.png"/>
        </div>
    </div>
  );
};

export default Hero;
