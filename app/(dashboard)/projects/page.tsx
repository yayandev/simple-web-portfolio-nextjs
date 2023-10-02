"use client";
import ProjectCard from "@/components/ProjectCard";
import { fetcher } from "@/utils/fetcher";
import Link from "next/link";

import { BsPlusCircle } from "react-icons/bs";
import useSWR from "swr";

interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  linkDemo: string;
  linkCode: string;
}

const PageProjects = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/projects", fetcher, {
    revalidateOnFocus: false,
  });

  if (error) return <h1>failed to load</h1>;
  if (isLoading) return <h1>Loading...</h1>;

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
        {data?.projects?.map((project: Project) => (
          <ProjectCard project={project} key={project.id} mutate={mutate} />
        ))}
      </div>
    </section>
  );
};

export default PageProjects;
