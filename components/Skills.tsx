import { FaBootstrap, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiPhp, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-600",
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3 />,
    color: "text-blue-600",
  },
  {
    id: 3,
    name: "Javascript",
    icon: <DiJavascript1 />,
    color: "text-yellow-600",
  },
  {
    id: 4,
    name: "php",
    icon: <SiPhp />,
    color: "text-blue-900",
  },
  {
    id: 5,
    name: "Typescript",
    icon: <SiTypescript />,
    color: "text-blue-600",
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "text-purple-600",
  },
  {
    id: 7,
    name: "Tailwindcss",
    icon: <SiTailwindcss />,
    color: "text-sky-600",
  },
  {
    id: 8,
    name: "React Js",
    icon: <FaReact />,
    color: "text-sky-600",
  },
  {
    id: 9,
    name: "Next Js",
    icon: <TbBrandNextjs />,
    color: "text-black",
  },
  {
    id: 10,
    name: "Mongodb",
    icon: <DiMongodb />,
    color: "text-green-600",
  },
  {
    id: 11,
    name: "Mysql",
    icon: <GrMysql />,
    color: "text-blue-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full space-y-5 my-3">
      <h1 className="text-xl sm:text-2xl font-bold text-center">Skills</h1>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap gap-3 max-w-2xl justify-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex gap-1 p-3 rounded border items-center text-sm sm:text-xl"
            >
              <span className={skill.color}>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
