"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";

interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  linkDemo: string;
  linkCode: string;
}

const ProjectCard = ({
  project,
  mutate,
}: {
  project: Project;
  mutate: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteProject = async (id: string) => {
    setIsLoading(true);
    const res = await axios.delete(`/api/projects?id=${id}`);
    if (res.data.success) {
      mutate();
    } else {
      setError(res.data.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-72 border p-3 space-y-2" key={project.id}>
      <Image src={project.image} width={250} height={250} alt="Project" />
      <h1 className="font-semibold">{project.name}</h1>
      <button
        disabled={isLoading}
        onClick={() => deleteProject(project.id)}
        className="disabled:opacity-50 p-2 rounded bg-red-600 text-white"
      >
        {isLoading ? "Deleting..." : <BsTrashFill />}
      </button>
    </div>
  );
};

export default ProjectCard;
