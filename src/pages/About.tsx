import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const JavaLogo = require("../assets/logos/JavaLogo.png");

const skills = [
  { name: "JavaScript", logo: JsLogo },
  { name: "Java", logo: JavaLogo },
  { name: "Python", logo: PythonLogo },
  { name: "React", logo: ReactLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "TypeScript", logo: TypescriptLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Node.js", logo: NodeJSLogo },
  { name: "SQL", logo: SqlLogo },
];

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-40 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            I'm currently a 3rd year Computer Engineering student at UC Santa Barbara. The field of CS is my focus, and I'm
            proficient in full-stack development and AI tools. I excel in problem-solving, with a range of engineering skills.
            In my free time, I love watching history documentaries and playing the piano.
          </code>
          <br />
          <br />
          <code>Skills:</code>
          <List list={skills} />
        </div>
      </div>
    </div>
  );
};

export default About;
