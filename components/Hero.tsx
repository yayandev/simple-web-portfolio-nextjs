import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center h-[90vh]">
      <div className="flex flex-col gap-5 max-w-xs sm:max-w-lg justify-center items-center">
        <Image
          src="/mee.png"
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-full"
          alt="Yayan Faturrohman"
        />
        <h1 className="font-bold text-xl sm:text-2xl text-center">
          👋🏻Hello, Im Yayan Faturrohman
        </h1>
        <p className="text-sm sm:text-lg text-center">
          I am a Front End React Developer experienced in creating responsive
          and interactive user interfaces using React technology, with a focus
          on providing an optimal user experience.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="https://instagram.com/yanz20.ig" className="text-xl">
            <FaInstagram />
          </Link>
          <Link href="https://github.com/yayanfr20" className="text-xl">
            <FaGithub />
          </Link>
          <Link href="/" className="text-xl">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
