import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const GitIcon = require("../assets/icons/GitIcon.png");

const SideBar = ({
  setWidth,
  width,
}: {
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  width: number;
}) => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const startResizing = (mouseDownEvent: React.MouseEvent) => {
    const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
      const delta = mouseMoveEvent.clientX - mouseDownEvent.clientX;
      const newWidth = Math.max(170, mouseDownEvent.clientX + delta);
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setWidth(parseInt(savedWidth));
    }
  }, [setWidth]);

  return (
    <div className="flex h-full">
      <div className="text-[#a2aabc] text-lg mt-5 flex w-full">
        <div>
          <div
            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
            onClick={() => SetShowProjectsList(!showProjectsList)}
          >
            {showProjectsList ? (
              <ChevronDownIcon className="w-7 mr-1" />
            ) : (
              <ChevronRightIcon className="w-7 mr-1" />
            )}
            <p>Projects</p>
          </div>
          {showProjectsList ? (
            <>
              <div
                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
                onClick={() => SetShowWebList(!showWebList)}
              >
                {showWebList ? (
                  <ChevronDownIcon className="w-7 mr-1  ml-5" />
                ) : (
                  <ChevronRightIcon className="w-7 mr-1  ml-5" />
                )}

                <p>Web</p>
              </div>
              {showWebList ? <WebList /> : null}
            </>
          ) : null}
          <div className="absolute w-full bottom-10 px-6">
            <div className="flex justify-between">
              <a href="/">
                <img
                  src={GitLogo}
                  alt="Git Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="/">
                <img
                  src={KaggleLogo}
                  alt="Kaggle Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="/">
                <img
                  src={LinkedinLogo}
                  alt="Linkedin Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
              <a href="/">
                <img
                  src={MailLogo}
                  alt="Mail Logo"
                  className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#262526] h-full border-r border-gray-700 border-opacity-50 hover:border-opacity-100 hover:border-blue-500 w-3 hover:cursor-col-resize"
        onMouseDown={startResizing}
      ></div>
    </div>
  );
};

export default SideBar;

const WebList = () => (
  <div className="flex flex-col">
    <a href="https://github.com/yxz29315/recipe" target="_blank" rel="noopener noreferrer">
      <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
        <img
          src={GitIcon}
          alt="Git Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p className="text-sm">Nomie.ai</p>
      </div>
    </a>
    <a href="https://github.com/yxz29315/lstm_stock_price_prediction" target="_blank" rel="noopener noreferrer">
      <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
        <img
          src={GitIcon}
          alt="Git Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p className="text-sm">lstm_stock_prediction</p>
      </div>
    </a>
    <a href="https://github.com/yxz29315/covid" target="_blank" rel="noopener noreferrer">
      <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
        <img
          src={GitIcon}
          alt="Git Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p className="text-sm">covid_19_visualizer</p>
      </div>
    </a>
    <a href="https://github.com/yxz29315/RubiksCubeSolverA" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12">
        <img
          src={GitIcon}
          alt="Git Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p className="text-sm">RubiksCubeSolverA</p>
      </div>
    </a>
    <a href="https://github.com/kevinjl321/frc-scouting" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12">
        <img
          src={GitIcon}
          alt="Git Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p className="text-sm">frc-scouting</p>
      </div>
    </a>
    <a href="https://github.com/FRC-Team-1160/Shooter-v3" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12">
        <img
          src={GitIcon}
          alt="Git Icon"
          className="w-7 mr-1  ml-5 text-yellow_vs"
        />
        <p className="text-sm">Shooter-v3</p>
      </div>
    </a>
  </div>
);
