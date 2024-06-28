import React from 'react';

const DownloadLinkButton = ({ href, target, imgSrc, imgAlt, imgWidth }) => {
  return (
    <a
      href={href}
      target={target}
      className="animate-pulse bg-blue-500 bg-opacity-0 duration-300 hover:bg-opacity-100 hover:ring-8 hover:ring-blue-500 rounded-full shadow-2xl transition-all"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        className="w-8 md:block"
      />
    </a>
  );
};

export default DownloadLinkButton;


