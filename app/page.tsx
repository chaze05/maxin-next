'use client';
// import Image from "next/image";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import About from "./sections/About";
import Feature from "./sections/Feature";
import Download from "./sections/Download";
import Screenshot from "./sections/Screenshot";
import Testimonial from "./sections/Testimonial";
export default function Home() {
  return (
    <>
    <Hero />
    <Info />
    <About orderL="" orderR=""  title="About our App"  subtitle="Advance features give you full control" image='https://chaze05.github.io/maxin/img/iphone.png' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
    <Feature  order1="" order2="" order3="" title="Amazing Features" description="There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration in some form, by injected humour randomis" />
    <Download />
    <Screenshot />
    <Testimonial />
    </>
  );
}
