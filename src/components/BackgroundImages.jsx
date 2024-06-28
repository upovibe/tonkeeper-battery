import React from 'react';

const BackgroundImages = () => {
  return (
    <div>
      <img
        src="images/logo/Tonkeeper-logo.svg"
        className="absolute animate-pulse opacity-40 right-20 top-0 w-60 md:opacity-70 lg:duration-300 lg:opacity-100 lg:transition-all"
        alt="Tonkeeper Logo 1"
      />
      <img
        src="images/logo/Tonkeeper-logo.svg"
        className="absolute animate-pulse bottom-96 opacity-60 right-20 w-60 sm:opacity-80 lg:opacity-100"
        alt="Tonkeeper Logo 2"
      />
      <img
        src="images/logo/Tonkeeper-logo.svg"
        className="absolute animate-pulse bottom-1/2 left-20 opacity-60 w-60 sm:opacity-80 md:opacity-100"
        alt="Tonkeeper Logo 3"
      />
    </div>
  );
};

export default BackgroundImages;
