import React from "react";

const LoadPostCard = () => {
  return (
    <div>
      <div className="w-full bg-slate-600 animate-pulse px-5 pt-9 pb-6 rounded-lg text-white relative">
        <div className="rounded-full bg-slate-700 w-16 h-16 absolute -top-2.5 left-5"></div>
        <span className="absolute top-2 right-3 bg-slate-800 w-20 h-5 rounded-xl font-light"></span>
        <div className="flex-1 flex flex-col gap-3 min-w-0 pt-1">
          <div className="w-[87%] h-3 ml-20 bg-slate-700 rounded-full"></div>
          <div className="w-[97%] h-3 bg-slate-700 rounded-full"></div>
          <div className="w-[50%] h-3 bg-slate-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadPostCard;
