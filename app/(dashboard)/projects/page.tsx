import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

import { BsPlusCircle, BsTrashFill } from "react-icons/bs";

const getProjects = async () => {
  const res = await axios.get(`${process.env.DOMAIN}/api/projects`);
  return res.data.projects;
};

interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  linkDemo: string;
  linkCode: string;
}

const PageProjects = async () => {
  const projects = await getProjects();
  return (
    <section className="space-y-3 my-3 w-full border p-3">
      <Link
        href="/add-projects"
        className="p-2 rounded bg-green-600 text-white inline-block"
      >
        <div className="flex items-center gap-2">
          <BsPlusCircle /> <span>Add Projects</span>
        </div>
      </Link>
      <div className="w-full flex flex-wrap gap-3 justify-start">
        {projects?.map((project: Project) => (
          <div className="w-72 border p-3 space-y-2" key={project.id}>
            <Image src={project.image} width={250} height={250} alt="Project" />
            <h1 className="font-semibold">{project.name}</h1>
            <button className="p-2 rounded bg-red-600 text-white">
              <BsTrashFill />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PageProjects;
