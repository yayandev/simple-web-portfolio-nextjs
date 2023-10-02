"use client";
import { fetcher } from "@/utils/fetcher";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import useSWR from "swr";

interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  linkDemo: string;
  linkCode: string;
}

const Portfolio = () => {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  if (error) return <h1>Failed to load</h1>;

  return (
    <section className="w-full my-3 space-y-3">
      <h1 className="text-center sm:text-2xl text-xl font-bold">Portfolio</h1>
      {isLoading ? (
        <div className="w-full flex flex-wrap gap-3 justify-around animate-pulse">
          <div className="w-96 space-y-3 border-b pb-3">
            <div className="w-full h-[250px] bg-slate-300"></div>
            <div className="w-full h-6 bg-slate-300"></div>
            <div className="w-20 h-6 bg-slate-300"></div>
          </div>
          <div className="w-96 space-y-3 border-b pb-3">
            <div className="w-full h-[250px] bg-slate-300"></div>
            <div className="w-full h-6 bg-slate-300"></div>
            <div className="w-20 h-6 bg-slate-300"></div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-3 justify-around">
          {data?.projects?.map((project: Project) => (
            <div className="w-96 space-y-3 border-b pb-3" key={project.id}>
              <Image
                src={project.image}
                width={300}
                height={300}
                className="w-full"
                alt="Card image"
              />
              <h3 className="font-semibold text-xl">{project.name}</h3>
              <Link
                href={project.linkCode}
                className="text-semibold flex gap-1 items-center text-sm "
              >
                <span>Read More</span> <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
