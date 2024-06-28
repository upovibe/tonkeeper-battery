import React from 'react';
import LinkButton from './LinkButton';

const OverviewSection = () => {
  // Function to handle tab switching
  const changeActiveTab = (event, tabID) => {
    let tabs = document.querySelectorAll('.tab-content > div');
    tabs.forEach(tab => {
      tab.classList.add('hidden');
    });

    let activeTab = document.getElementById(tabID);
    if (activeTab) {
      activeTab.classList.remove('hidden');
      activeTab.classList.add('flex');
    }
  };

  return (
    <section className="flex flex-col gap-40 h-auto items-center justify-between max-w-6xl my-10 p-5 w-screen" data-pg-name="Overview" id="Overview" title="Overview" data-pg-collapsed>
      <div className="flex flex-col gap-20 h-auto items-center justify-between justify-items-center w-full md:flex-row">
        <div className="container fade-in-scroll overflow-hidden rounded-2xl">
          <video autoPlay muted loop className="w-full">
            <source src="images/video/Battery%20EN.mp4" type="video/mp4" />
            Your browser doesn't support HTML5 video tag.
          </video>
        </div>
        <div className="flex flex-col gap-5 items-center w-full sm:items-start">
          <h3 className="fade-in-scroll font-bold leading-relaxed text-2xl text-center text-gray-50 transition-all sm:text-left md:text-3xl lg:text-4xl xl:text-5xl">
            What is Tonkeeper Battery?
          </h3>
          <p className="fade-in-scroll font-normal leading-relaxed mb-5 text-base text-blue-200 text-center transition-all sm:text-left">
            The Battery is an off-chain account in Tonkeeper that eliminates the need for TON to pay gas fees, simplifying cryptocurrency transactions.
          </p>
          <LinkButton href="https://tonkeeper.com/" target="_blank" rel="noopener noreferrer">
          Get Tonkeeper
        </LinkButton>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-items-center justify-start w-full" id="tabs-id">
        <h3 className="fade-in-scroll font-bold text-4xl text-gray-50">Get More With Your Tonkeeper Battery</h3>
        <div className="backdrop-blur bg-gray-800 bg-opacity-80 fade-in-scroll flex flex-col gap-10 overflow-hidden p-5 rounded-2xl w-full md:flex-row md:gap-0 md:pl-0 md:pr-10 md:py-10">
          <ul className="flex flex-nowrap flex-row gap-5 gradient-border items-center justify-start list-none overflow-x-scroll pb-5 w-full md:flex-col md:items-start md:justify-start md:max-w-xs md:overflow-hidden md:pb-0 md:w-full">
            <li className="last:mr-0 w-auto md:w-full">
              <a onClick={(event) => changeActiveTab(event, 'tab-top-up')} className="bg-gray-700 bg-opacity-20 block cursor-pointer duration-300 font-semibold hover:bg-blue-900 hover:bg-opacity-40 px-6 py-3 rounded-full text-base text-blue-50 text-left transition-all w-full whitespace-nowrap md:bg-opacity-0 md:bg-transparent md:border-r md:border-transparent md:hover:border-blue-500 md:hover:border-r md:hover:pl-12 md:pl-10 md:rounded-none md:text-lg">
                <i className="fa-charging-station fa-fw fas hidden mr-2 text-base md:inline-block"></i>
                Top Up
              </a>
            </li>
            <li className="last:mr-0 w-auto md:w-full">
              <a onClick={(event) => changeActiveTab(event, 'tab-receive-tokens')} className="bg-gray-700 bg-opacity-20 block cursor-pointer duration-300 font-semibold hover:bg-blue-900 hover:bg-opacity-40 px-6 py-3 rounded-full text-base text-blue-50 text-left transition-all w-full whitespace-nowrap md:bg-opacity-0 md:bg-transparent md:border-r md:border-transparent md:hover:border-blue-500 md:hover:border-r md:hover:pl-12 md:pl-10 md:rounded-none md:text-lg">
                <i className="fa-exchange-alt fa-fw fas hidden mr-2 text-base md:inline-block"></i>
                Receive Tokens
              </a>
            </li>
            <li className="last:mr-0 w-auto md:w-full">
              <a onClick={(event) => changeActiveTab(event, 'tab-automated')} className="bg-gray-700 bg-opacity-20 block cursor-pointer duration-300 font-semibold hover:bg-blue-900 hover:bg-opacity-40 px-6 py-3 rounded-full text-base text-blue-50 text-left transition-all w-full whitespace-nowrap md:bg-opacity-0 md:bg-transparent md:border-r md:border-transparent md:hover:border-blue-500 md:hover:border-r md:hover:pl-12 md:pl-10 md:rounded-none md:text-lg">
                <i className="fa-magic fa-fw fas hidden mr-2 text-base md:inline-block"></i>
                Automated
              </a>
            </li>
            <li className="last:mr-0 w-auto md:w-full">
              <a onClick={(event) => changeActiveTab(event, 'tab-battery-status')} className="bg-gray-700 bg-opacity-20 block cursor-pointer duration-300 font-semibold hover:bg-blue-900 hover:bg-opacity-40 px-6 py-3 rounded-full text-base text-blue-50 text-left transition-all w-full whitespace-nowrap md:bg-opacity-0 md:bg-transparent md:border-r md:border-transparent md:hover:border-blue-500 md:hover:border-r md:hover:pl-12 md:pl-10 md:rounded-none md:text-lg">
                <i className="fa-battery-three-quarters fa-fw fas hidden mr-2 text-base md:inline-block"></i>
                Battery Status
              </a>
            </li>
          </ul>
          <div className="break-words flex flex-col min-w-0 overflow-hidden relative w-full md:border-blue-900 md:border-l md:pl-10">
            <div className="flex gap-20 w-full">
              <div className="tab-content tab-space">
                <div id="tab-top-up" className="fade-in-down flex flex-col gap-20 justify-center sm:flex-col md:flex-col lg:flex-row">
                  <div className="flex flex-col gap-5 w-11/12">
                    <h4 className="font-semibold text-2xl text-gray-50">Top Up Your Battery</h4>
                    <p className="text-blue-50">
                      Start by topping up your Tonkeeper Battery using in-app purchases, TON, or stablecoins. Go to Settings &rarr; Battery in your app and follow the instructions to add funds. <br/><br/>
                      This ensures you have enough charges to cover gas fees.
                    </p>
                  </div>
                  <div className="w-full lg:w-8/12">
                    <img src="images/photo_2024-06-24_15-53-58.png" className="block rounded-3xl w-full" alt="Top Up Your Battery" />
                  </div>
                </div>
                <div className="fade-in-down flex-col gap-20 hidden sm:flex-col md:flex-col lg:flex-row" id="tab-receive-tokens">
                  <div className="flex flex-col gap-5 w-11/12">
                    <h4 className="font-semibold text-2xl text-gray-50">Token Exchange</h4>
                    <p className="text-blue-50">
                      Receive stablecoins, NFTs, and other tokens directly without worrying about gas fees.<br/><br/>
                      Tonkeeper Battery lets you accept assets without needing native coins for transaction fees.
                    </p>
                  </div>
                  <div className="w-full lg:w-8/12">
                    <img src="images/Receive%20Tokens.png" className="block rounded-3xl w-full" alt="Receive Tokens" />
                  </div>
                </div>
                <div className="fade-in-down flex-col gap-20 hidden sm:flex-col md:flex-col lg:flex-row" id="tab-automated">
                  <div className="flex flex-col gap-5 w-11/12">
                    <h4 className="font-semibold text-2xl text-gray-50">Automatic Gas Payments</h4>
                    <p className="text-blue-50">
                      Your Tonkeeper Battery automatically covers gas fees for all your transactions. Make payments and transfers seamlessly without manually providing gas fees.<br/><br/>
                      The battery deducts charges based on transaction complexity.
                    </p>
                  </div>
                  <div className="w-full lg:w-8/12">
                    <img src="images/Automated.png" className="block rounded-3xl w-full" alt="Automatic Gas Payments" />
                  </div>
                </div>
                <div className="fade-in-down flex-col gap-20 hidden sm:flex-col md:flex-col lg:flex-row" id="tab-battery-status">
                  <div className="flex flex-col gap-5 w-11/12">
                    <h4 className="font-semibold text-2xl text-gray-50">Battery Status</h4>
                    <p className="text-blue-50">
                      Keep track of your Tonkeeper Battery status from the main screen. Monitor available charges and recharge as needed.<br/><br/>
                      The app notifies you when your battery is low, ensuring uninterrupted transactions.
                    </p>
                  </div>
                  <div className="w-full lg:w-8/12">
                    <img src="images/photo_2024-05-01_15-21-35.png" className="block rounded-3xl w-full" alt="Battery Status" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
