import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
const Portfolio = () => {
  return (
    <section className="w-full my-3 space-y-3">
      <h1 className="text-center sm:text-2xl text-xl font-bold">Portfolio</h1>
      <div className="w-full flex flex-wrap gap-3 justify-around">
        <div className="w-96 space-y-3 border-b pb-3">
          <Image
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            width={300}
            height={300}
            className="w-full"
            alt="Card image"
          />
          <h3 className="font-semibold text-xl">title project</h3>
          <Link
            href="/"
            className="text-semibold flex gap-1 items-center text-sm "
          >
            <span>Read More</span> <FiArrowRight />
          </Link>
        </div>
        <div className="w-96 space-y-3 border-b pb-3">
          <Image
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            width={300}
            height={300}
            className="w-full"
            alt="Card image"
          />
          <h3 className="font-semibold text-xl">title project</h3>
          <Link
            href="/"
            className="text-semibold flex gap-1 items-center text-sm "
          >
            <span>Read More</span> <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
