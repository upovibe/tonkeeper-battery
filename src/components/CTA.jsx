import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import LinkButton from './LinkButton';
import DownloadLinkButton from './DownloadLinkButton';

const StartUsingSection = () => {
  return (
    <section className="flex h-auto max-w-6xl my-10 p-5 w-screen">
      <div className="flex flex-col gap-10 items-stretch justify-items-start justify-start w-full">
        <div className="flex flex-col gap-5">
          <h3 className="fade-in-scroll font-bold text-4xl text-gray-50">Start Using Tonkeeper Battery</h3>
        </div>
        <div className="flex flex-col gap-10 items-stretch justify-between md:flex-row">
          <div className="backdrop-blur-md bg-gray-100 bg-opacity-10 border border-opacity-20 border-white fade-in-scroll h-60 overflow-hidden p-5 rounded-lg shadow-lg w-full">
            <div className="flex flex-col gap-3 h-full w-full">
              <h6 className="font-semibold text-gray-100 text-xl">Unlock Seamless Transactions</h6>
              <p className="text-gray-100">Experience the ease of gasless payments and seamless transactions, download Tonkeeper now.</p>
              <div className="duration-300 flex gap-5 justify-start mt-auto transition-all sm:flex-row md:justify-start justify-center">
              <DownloadLinkButton 
          href="https://data2.ton.app/apk/tonkeeper.apk" 
          target="_blank" 
          imgSrc="images/brands-logo/android.svg" 
          imgAlt="Google Play" 
          imgWidth="30"
        />
                <DownloadLinkButton
          href="https://play.google.com/store/apps/details?id=com.ton_keeper"
          target="_blank"
          imgSrc="images/brands-logo/playstore.svg"
          imgAlt="Google Play"
        />
        <DownloadLinkButton
          href="https://apps.apple.com/us/app/tonkeeper/id1587742107"
          imgSrc="images/brands-logo/App-Store.png"
          imgAlt="App Store"
        />
        <DownloadLinkButton
          href="https://chrome.google.com/webstore/detail/tonkeeper/omaabbefbmiijedngplfjmnooppbclkk/?utm_source=tonkeeper_index"
          imgSrc="images/brands-logo/chrome.svg"
          imgAlt="Chrome"
        />
        <DownloadLinkButton
          href="https://chrome.google.com/webstore/detail/tonkeeper/omaabbefbmiijedngplfjmnooppbclkk/?utm_source=tonkeeper_index"
          target="_blank"
          imgSrc="images/brands-logo/edge.svg"
          imgAlt="Microsoft Edge"
        />
        <DownloadLinkButton
          href="https://chrome.google.com/webstore/detail/tonkeeper/omaabbefbmiijedngplfjmnooppbclkk/?utm_source=tonkeeper_index"
          target="_blank"
          imgSrc="images/brands-logo/brave.svg"
          imgAlt="Brave Browser"
        />
        <DownloadLinkButton
          href="https://addons.mozilla.org/en-US/firefox/addon/tonkeeper/?utm_source=tonkeeper_index"
          target="_blank"
          imgSrc="images/brands-logo/firefox.svg"
          imgAlt="Mozilla Firefox"
        />
              </div>
            </div>
          </div>
          <div className="backdrop-blur-md bg-gray-100 bg-opacity-10 border border-opacity-20 border-white fade-in-scroll h-60 overflow-hidden p-5 rounded-lg shadow-lg w-full">
            <div className="flex flex-col gap-3 h-full w-full">
              <h6 className="font-semibold text-gray-100 text-xl">Join Our Community</h6>
              <p className="text-gray-100">Become a part of our growing community and explore new opportunities.</p>
              <div className="duration-300 flex gap-5 justify-start mt-auto transition-all sm:flex-row">
                <LinkButton href="https://twitter.com/tonkeeper" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="mr-1" />
                  Twitter
                </LinkButton>
                <LinkButton href="https://t.me/help_tonkeeper_bot" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegramPlane} className="mr-1" />Telegram
                </LinkButton>
              </div>
            </div>
          </div>
        </div>

        <div className="border-gray-300 border-opacity-10 border-t fade-in-up mb-0 mt-16 w-full"></div>
      </div>
    </section>
  );
};

export default StartUsingSection;
