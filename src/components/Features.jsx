import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="flex flex-col gap-10 items-center justify-center max-w-6xl my-10 p-5 w-screen" data-pg-name="Features" id="Features" title="Features" data-pg-collapsed>
      <div className="flex flex-col gap-5">
        <h3 className="fade-in-scroll font-bold leading-relaxed text-2xl text-center text-gray-50 transition-all sm:text-left md:text-4xl lg:text-4xl xl:text-5xl">
          Experience Hassle-Free Crypto Transactions
        </h3>
      </div>
      <div className="duration-200 flex flex-col gap-5 items-center justify-center parent-container relative self-center transition-all w-full sm:flex-row">
        <div className="bg-gray-700 border-2 border-gray-400 border-opacity-40 child duration-300 flex flex-col gap-1 max-w-max overflow-hidden p-5 rounded-3xl shadow-2xl transition-all w-72 z-0 sm:mt-0 sm:translate-y-0 sm:w-full">
          <h4 className="font-medium text-gray-50 text-lg md:text-xl lg:text-2xl xl:text-3xl">Token Swaps</h4>
          <p className="text-sm text-blue-200">Swap tokens seamlessly without gas fees.</p>
          <img src="images/token%20swap.png" className="mt-5" alt="Token Swap" />
        </div>
        <div className="-translate-y-96 bg-gray-700 border-2 border-gray-400 border-opacity-40 card child duration-300 flex flex-col gap-1 max-w-max overflow-hidden p-5 rounded-3xl shadow-2xl transition-all w-72 z-10 sm:mt-0 sm:translate-y-0 sm:w-full">
          <h4 className="font-medium text-gray-50 text-lg md:text-xl lg:text-2xl xl:text-3xl">Token Transfers</h4>
          <p className="text-sm text-blue-200">Transfer tokens quickly and efficiently.</p>
          <img src="images/Token%20Transfers.png" className="mt-5" alt="Token Transfers" />
        </div>
        <div className="-mt-96 -translate-y-96 bg-gray-700 border-2 border-gray-400 border-opacity-40 child duration-300 flex flex-col gap-1 max-w-max overflow-hidden p-5 rounded-3xl shadow-2xl transition-all w-72 z-20 sm:mt-0 sm:translate-y-0 sm:w-full">
          <h4 className="font-medium text-gray-50 text-lg md:text-xl lg:text-2xl xl:text-3xl">NFT Transfers</h4>
          <p className="text-sm text-blue-200">Handle NFT transfers effortlessly.</p>
          <img src="images/NFTs.png" className="mt-5" alt="NFT Transfers" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
