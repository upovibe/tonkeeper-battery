import React from 'react';
import LinkButton from './LinkButton';

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-10 items-center justify-center max-w-6xl my-10 p-5 w-screen" id="Home" data-pg-name="hero-section" title="Hero-section">
      <div className="flex flex-col gap-6 items-center text-center">
        <h1 data-pg-name="Title" className="duration-300 fade-in-up font-extrabold leading-normal px-5 text-[8vw] text-gray-50 transition-all sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]">
          Tonkeeper Battery
        </h1>
        <h2 className="animated-text bg-clip-text bg-gradient-to-r bg-transparent duration-300 fade-in-up font-bold from-gray-100 pb-5 px-5 text-3xl text-transparent to-blue-900 transition-all via-blue-500 lg:text-4xl xl:text-5xl">
          Effortless transactions without gas fees.
        </h2>
        <p className="duration-300 fade-in-up font-normal leading-relaxed px-10 text-blue-200 text-lg transition-all w-full">
          Swap tokens, transfer assets, and handle NFTs seamlessly
        </p>
      </div>
      <div className="duration-300 flex flex-row gap-5 justify-center p-2 transition-all w-full">
        <LinkButton href="https://tonkeeper.helpscoutdocs.com/" target="_blank" rel="noopener noreferrer">
          Learn More
        </LinkButton>
        <LinkButton href="https://tonkeeper.com/" target="_blank" rel="noopener noreferrer">
          Get Started
        </LinkButton>
      </div>
      <div className="fade-in-down flex flex-col items-center inse">
      <div className="bg-gray-700 duration-300 h-4 rounded-t-3xl shadow-inner transition-all w-12"></div> 
        <div data-pg-name="Battery" className="bg-gray-900 border-gray-700 duration-300 flex h-[250px] items-center justify-center relative ring-8 ring-gray-700 ring-inset ring-offset-8 ring-offset-gray-700 rounded-[2rem] shadow-2xl transition-all w-[150px] z-10">
          <img src="images/logo/Tonkeeper-logo.svg" alt="Tonkeeper-logo" className="block bolt duration-300 transition-all w-[60px] md:w-[80px]" />
          <div className="absolute after:absolute after:bg-gradient-to-t after:blur-[4rem] after:content-[''] after:from-blue-300 after:h-full after:rounded-[inherit] after:to-blue-500 after:via-blue-400 after:w-full battery before:absolute before:bg-gradient-to-t before:content-[''] before:from-blue-300 before:h-full before:rounded-[inherit] before:to-blue-500 before:via-blue-400 before:w-full bottom-0 charge mb-4 rounded-2xl w-10/12 z-10"></div>
        </div>
      </div>
      <div className="border-gray-300 border-opacity-10 border-t fade-in-up mb-0 mt-16 w-full"></div>
    </section>
  );
};

export default HeroSection;
