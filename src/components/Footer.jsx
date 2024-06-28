import React from 'react';

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg bg-gray-900 bg-opacity-10 fade-in-scroll flex justify-center w-screen">
      <div className="flex flex-col gap-10 max-w-6xl p-5 w-full">
        <div className="flex flex-col gap-10 justify-between md:flex-row">
          {/* Company Section */}
          <div className="w-full">
            <h5 className="text-xl font-bold mb-2 text-gray-50">Company</h5>
            <ul className="flex flex-col gap-1 space-y-2">
              <li>
                <a href="https://t.me/tonkeeper_news" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="https://t.me/tonkeeperdev" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  Chat
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tonkeeper" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          {/* Resources Section */}
          <div className="w-full">
            <h5 className="text-xl font-bold mb-2 text-gray-50">Resources</h5>
            <ul className="flex flex-col gap-1 space-y-2">
              <li>
                <a href="https://tonkeeper.helpscoutdocs.com/" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://t.me/help_tonkeeper_bot" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="https://t.me/help_tonkeeper_bot" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  Suggest a Feature
                </a>
              </li>
            </ul>
          </div>
          {/* Developers Section */}
          <div className="w-full">
            <h5 className="text-xl font-bold mb-2 text-gray-50">Developers</h5>
            <ul className="flex flex-col gap-1 space-y-2">
              <li>
                <a href="https://github.com/tonkeeper/wallet-api" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://t.me/help_tonkeeper_bot" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  Bug Bounty
                </a>
              </li>
              <li>
                <a href="https://github.com/tonkeeper" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          {/* Legal Section */}
          <div className="w-full">
            <h5 className="text-xl font-bold mb-2 text-gray-50">Legal</h5>
            <ul className="flex flex-col gap-1 space-y-2">
              <li>
                <a href="https://tonkeeper.com/terms" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="https://tonkeeper.com/privacy" className="duration-300 hover:text-blue-200 text-gray-50 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap gap-10 items-center justify-between mt-8">
          <a href="#" className="animate-bounce mr-auto sm:mr-0">
            <img src="images/logo/Tonkeeper-logo.svg" alt="Tonkeeper-logo" width="35" />
          </a>
          <p className="text-sm text-gray-200">&copy; 2024 Tonkeeper. All rights reserved. All trademarks are the property of their respective owners.</p>          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
