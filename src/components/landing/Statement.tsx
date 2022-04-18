import React from "react";
import './statement.css'
const Statement: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-3/5 px-5 sm:px-28 ">

      <div className="flex flex-col md:flex-row space-y-5 md:justify-between align-middle">

        <div className="right__text">
          <h1 className="text-4xl font-medium">ALL</h1>
        </div>

        <div className="left__text w-full sm:w-96 mr-16 flex overflow-hidden break-normal">
          <h1 className="text-lg break-normal ">
            All our products are designed to restore your skin to optimum health
            and enable you to feel the best version of yourself, wherever you
            are in the world.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Statement;
