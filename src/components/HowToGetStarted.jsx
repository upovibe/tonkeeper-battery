import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faDownload, faWallet, faCog, faBatteryFull, faShoppingCart, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const GettingStartedSection = () => {
  // Function to handle custom scrolling
  const customScrollLeft = () => {
    const container = document.getElementById('scroll-container');
    container.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const customScrollRight = () => {
    const container = document.getElementById('scroll-container');
    container.scrollBy({ left: 500, behavior: 'smooth' });
  };

  // Add event listener for arrow key navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        customScrollLeft();
      } else if (event.key === 'ArrowRight') {
        customScrollRight();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <section className="flex flex-col gap-10 h-auto items-start justify-center max-w-6xl my-10 p-5 relative w-screen" data-pg-collapsed>
      <div className="flex flex-col gap-5 items-center justify-center self-center">
        <h3 className="fade-in-scroll font-bold text-4xl text-center text-gray-50">Getting Started</h3>
        <p className="duration-300 fade-in-scroll font-normal text-base text-blue-200 text-center transition-all">Getting started with Tonkeeper Battery is easy. Follow these simple steps to enjoy seamless and fee-free crypto transactions.</p>
      </div>
      <div className="fade-in-scroll fade-overlay-container flex group items-center justify-center relative w-full">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={customScrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div id="scroll-container" className="flex gap-10 overflow-x-auto w-full scrollbar-hide snap-x snap-mandatory">
          {/* Repeat the following cards for each step */}
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-80 fade-in flex flex-col flex-none gap-10 h-auto justify-between max-w-xs overflow-hidden p-5 rounded-3xl snap-start w-full">
            <div className="flex flex-col gap-2 text-center">
              <h6 className="font-semibold text-2xl text-white">Download the App</h6>
              <p className="font-medium text-white">Get Tonkeeper from the App Store or Google Play and install it on your mobile device.</p>
            </div>
            <img src="images/Download%20the%20App.png" className="w-full" alt="Download the App" />
            <FontAwesomeIcon icon={faDownload} className="text-4xl text-gray-300 mt-4" />
          </div>
          {/* End repeat */}
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-80 fade-in flex flex-col-reverse flex-none gap-10 h-auto justify-between max-w-xs overflow-hidden p-5 rounded-3xl snap-start w-full">
            <div className="flex flex-col gap-2 text-center">
              <h6 className="font-semibold text-2xl text-white">Create or Import Wallet</h6>
              <p className="font-medium text-white">Open the app and follow the instructions to create a new wallet or import an existing one.</p>
            </div>
            <img src="images/Create%20New%20Wallet.png" className="w-full" alt="Create or Import Wallet" />
            <FontAwesomeIcon icon={faWallet} className="text-4xl text-gray-300 mt-4" />
          </div>
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-80 fade-in flex flex-col flex-none gap-10 h-auto justify-between max-w-xs overflow-hidden p-5 rounded-3xl snap-start w-full">
            <div className="flex flex-col gap-2 text-center">
              <h6 className="font-semibold text-2xl text-white">Locate Settings</h6>
              <p className="font-medium text-white">Find the gear icon at the top right corner of the app to access settings.</p>
            </div>
            <img src="images/Open%20Settings.png" className="w-full" alt="Locate Settings" />
            <FontAwesomeIcon icon={faCog} className="text-4xl text-gray-300 mt-4" />
          </div>
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-80 fade-in flex flex-col-reverse flex-none gap-10 h-auto justify-between max-w-xs overflow-hidden p-5 rounded-3xl snap-start w-full">
            <div className="flex flex-col gap-2 text-center">
              <h6 className="font-semibold text-2xl text-white">Navigate to Battery</h6>
              <p className="font-medium text-white">In settings, navigate to the Battery section to manage your Tonkeeper Battery.</p>
            </div>
            <img src="images/Open%20Battery.png" className="w-full" alt="Navigate to Battery" />
            <FontAwesomeIcon icon={faBatteryFull} className="text-4xl text-gray-300 mt-4" />
          </div>
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-80 fade-in flex flex-col flex-none gap-10 h-auto justify-between max-w-xs overflow-hidden p-5 rounded-3xl snap-start w-full">
            <div className="flex flex-col gap-2 text-center">
              <h6 className="font-semibold text-2xl text-white">In-App Purchase</h6>
              <p className="font-medium text-white">Top up your battery using in-app purchases, TON, USDt etc. to cover transaction fees.</p>
            </div>
            <img src="images/Inapp%20purchase.png" className="w-full" alt="In-App Purchase" />
            <FontAwesomeIcon icon={faShoppingCart} className="text-4xl text-gray-300 mt-4" />
          </div>
          <div className="backdrop-blur-md bg-gray-800 bg-opacity-80 fade-in flex flex-col-reverse flex-none gap-10 h-auto justify-between max-w-xs overflow-hidden p-5 rounded-3xl snap-start w-full">
            <div className="flex flex-col gap-2 text-center">
              <h6 className="font-semibold text-2xl text-white">Start Using Tonkeeper Battery</h6>
              <p className="font-medium text-white">Make transactions without gas fees. Enjoy a hassle-free experience.</p>
            </div>
            <img src="images/Purchase.png" className="w-full" alt="Start Using Tonkeeper Battery" />
            <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-gray-300 mt-4" />
          </div>
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={customScrollRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default GettingStartedSection;
