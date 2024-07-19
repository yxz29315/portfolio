import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-40 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">UC Santa Barbara</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Computer Engineering
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2022 - June 2026
            </code>
            <br />
            <code className="text-sm">
              <br />Coursework:
              <br />• Lin Alg, Diff Equations, Vector Calculus, Data Structures & Algorithms, Object Oriented Design, Discrete Math, Physics 1-4, Analog and Digital Circuits and Systems A-B-C, Digital Design Principles
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Experience</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Java Instructor</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Project Edge{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Sept 2022 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Curated comprehensive computer science curriculum for 50+ high school students
              <br />• Advised students in strategies for the AP exam and personalized Java lessons on Object Oriented Programming
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Engineering President</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Titanium Robotics{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Sept 2022 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Mentored and recruited 40+ members for FRC team 1160
              <br />• Spearheaded design and manufacturing of the competition robot
              <br />• Piloted development of Java control systems, autonomous and teleoperated PID control loops, and target detection
              <br />• Achieved Rockwell Automation’s Creativity Award and finished 8th out of 43 teams in Offensive Power Rating at 2022 FIRST Sacramento Regional, team’s best performance in nearly 20 seasons
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Machine Learning Researcher</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Caltech{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• May 2022 - Sept 2022</code>
            <br />
            <code className="text-sm">
              <br />• Applied deep reinforcement learning algorithms to combinatorial puzzle solution spaces and produced a research paper under supervision of Prof. Babak Hassibi
              <br />• Trained and tested models implementing Monte Carlo tree search, deep approximate value iteration, and weighted A* search; final program had baseline accuracy of 83.78% with 2x2 Rubik’s cubes
              <br />• Utilized: Python, tensorflow, numpy, Jupyter Notebook
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Projects</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Stock Market Prediction using LSTM</code>
            <br />
            <code className="text-sm">
              <br />• Predicting stock market trends using long short-term memory (LSTM) neural networks
              <br />• Real-time data is sourced from yfinance library.
              <br />• Proven to be effective, with R-Squared coefficient of 0.89
              <br />• Utilized: Python, tensorflow, pandas, numpy
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">COVID-19 Visualizer</code>
            <br />
            <code className="text-sm">
              <br />• COVID-19 tracker app showing map with number of cases in proportional circles, recovered cases, deaths, active cases.
              <br />• Data is sourced from the disease.sh API.
              <br />• Utilized: React, Material-UI, Charts.js, Firebase.
            </code>
          </div>
          <button className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
          <a href="https://github.com/yxz29315" target="_blank" rel="noopener noreferrer">
            <code>Link to Github</code>
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
