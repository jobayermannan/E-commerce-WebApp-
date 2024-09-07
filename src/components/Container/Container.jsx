import React from 'react';
import LoginPageChair from '../../assets/LoginPageChair.png';
import furniFlex from '../../assets/furniFlex.png';

const Container = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full h-screen md:h-[1024px] relative">
      <div className="flex flex-col md:flex-row w-full md:w-auto h-auto md:h-auto">
        <div className="flex flex-col justify-center items-center w-full md:w-[688px] h-auto md:h-[1024px] p-6 gap-0 rounded-tl-lg opacity-100 shadow-lg relative">
          {children}
        </div>
        <div className="flex justify-center items-center w-full md:w-[688px] h-auto md:h-[1024px] border relative">
          <img src={LoginPageChair} alt="Chair" className="max-w-full max-h-full" />
          <img src={furniFlex} alt="FurniFlex" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Container;