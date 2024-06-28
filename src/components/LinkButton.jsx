import React from 'react';

const LinkButton = ({ href, target, rel, className, children }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`bg-blue-200 duration-300 fade-in-scroll font-semibold hover:bg-blue-100 hover:ring-8 hover:ring-blue-400 hover:ring-opacity-50 hover:shadow-2xl hover:shadow-blue-400 pt-2 pb-2 rounded-full text-base text-center text-gray-900 transition-all w-44 ${className}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
