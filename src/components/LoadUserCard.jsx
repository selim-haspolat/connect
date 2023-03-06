import React from "react";

const LoadUserCard = () => {
  return (
    <li className="py-3 sm:py-4 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        </div>
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          <div className="w-20 h-2 bg-slate-700 rounded-full"></div>
          <div className="w-28 h-2 bg-slate-700 rounded-full"></div>
        </div>
        <div className="inline-flex items-center w-5 h-3 rounded bg-slate-700"></div>
      </div>
    </li>
  );
};

export default LoadUserCard;
