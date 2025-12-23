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
            {/*<code className="text-xs text-brown_vs">
              • Sept 2022 - June 2026
            </code>
            <br />*/}
            <code className="text-sm">
              <br />Coursework:
              <br />• Data Structures & Algorithms I-II, Operating Systems, Advanced Applications Programming, Distributed Systems, Analog and Digital Circuits and Systems A-B-C, Sensor and Peripheral Interface Design, Digital Design Principles, Computer Architecture, Vector Calculus
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Experience</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Web Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Daily Nexus{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• June 2025 - Present</code>
            <br />
            <code className="text-sm">
              <br />• Selected to join the team revamping and maintaining the web and mobile platforms for the Daily Nexus newspaper
              <br />• Implement UI/UX improvements and interactive features across HTML/CSS/JavaScript, WordPress, React Native
              <br />• Collaborate with Editors-in-Chief to deploy fixes and ship new features that enhance usability and engagement
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
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
            <code className="text-blue_vs">AI Trainer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Outlier AI{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Feb 2024 - Present</code>
            <br />
            <code className="text-sm">
              <br />• I evaluated the quality of AI-generated code in C++/Java/Python/JavaScript/SQL
              <br />• Debugged 400+ code responses
            </code>
          </div>
        </div>
        
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Student Researcher</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Caltech{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• May 2023 - Sept 2023</code>
            <br />
            <code className="text-sm">
              <br />• Under mentorship of Prof. Babak Hassibi, applied deep reinforcement learning algorithms to engineer a model that could solve a 2x2 Rubik's cube in the least moves possible
              <br />• Trained models implementing Monte Carlo tree search, deep approximate value iteration, and weighted A* search; final program had baseline accuracy of 83.78%
              <br />• Utilized: Python, tensorflow, numpy
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Manager</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Kyodong Noodle{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• May 2023 - Dec 2024</code>
            <br />
            <code className="text-sm">
              <br />• Oversaw and managed the day to day of a restaurant; executed inventory management, purchase orders, food preparation
              <br />• Tested new marketing strategies in collaboration with student organizations to increase sales by approximately 15%
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
            <code className="text-xs text-brown_vs">• Sep 2018 - June 2022</code>
            <br />
            <code className="text-sm">
              <br />• Mentored and recruited 40+ members for FRC team 1160; led design and manufacturing of the competition robot
              <br />• Piloted development of Java control systems, PID control loops, and target detection
              <br />• Achieved Rockwell Automation’s Creativity Award and finished 8th out of 43 teams in Offensive Power Rating at 2022 FIRST Sacramento Regional, team’s best performance in 20 seasons
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Projects</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Nomie.ai – Mobile App</code>
            <br />
            <code className="text-sm">
              <br />• Developed a cross-platform app that identifies ingredients from photos or manual input and suggests personalized recipes
              <br />• Integrated Groq Cloud API (LLaMA 4 Maverick) and Supabase for authentication and nutritional preference storage
              <br />• Designed an interactive step-by-step cooking mode with built-in timers and voice/visual prompts, enhancing usability
              <br />• Utilized: React Native, Expo, PostgreSQL
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">UCSB Courses Search</code>
            <br />
            <code className="text-sm">
              <br />• Designed a web app to help students more efficiently find course information, past instructors and grade distributions
              <br />• Incorporated Google user authentication to access bookmarking and reviewing
              <br />• Utilized: React, Spring Boot, Node.js, PostgreSQL
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Drop Skimmer - Smart Playlist Web App</code>
            <br />
            <code className="text-sm">
              <br />• Built a responsive web application that intelligently skips to the most energetic part (drop) of songs from a Spotify playlist
              <br />• Utilized: React, TypeScript, Tailwind CSS, Framer Motion, Spotify Web API, YouTube API
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">AI Active Speaker Tracking Camera — UCSB ECE Capstone (Sponsor: Nuvoton)</code>
            <br />
            <code className="text-sm">
              <br />• Trained lightweight face detection and lip movement models for on-device active speaker tracking, on the NuMaker M55
              <br />• Utilized a microphone array & camera with motorized pan mechanism, using Python, TFLite (INT8), C/C++, and Nuvoton SDK
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">ECE 5: Introduction to Electrical and Computer Engineering</code>
            <br />
            <code className="text-sm">
              <br />• Designed and built an alarm clock that delivers a mild electric shock as a wake-up mechanism
              <br />• Programmed the Arduino Uno using the Arduino IDE to control timing and intensity, assembled electronic components
              <br />• Voted top project of the quarter out of around 40 groups
            </code>
          </div>
        </div>
        
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Gaucho Racing - FSAE Electric</code>
            <br />
            <code className="text-sm">
              <br />• Processed real-time sensor data and transmitted it over CAN, providing support to the engineers and driver
              <br />• Implemented data visualization dashboard for vehicle parameters (tire/brake temp, wheel rpm, suspension)
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
