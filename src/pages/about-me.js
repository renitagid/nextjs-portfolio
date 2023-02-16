import Image from "next/image";
import Link from "next/link";
import profile from "public/profile.jpg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSquareJs,
  faGit,
  faHtml5,
  faCss3,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <div className="">
      <div className="mt-2 ml-2 flex flex-col items-center">
        <h1 className="ml-2 mt-2 font-header text-4xl">About Me</h1>
        <div className="m-2 h-[120px] w-[120px] rounded-full bg-gradient-to-br from-orange-600 via-rose-400 to-amber-300 shadow-md shadow-gray-700 dark:shadow-black">
          <Image
            src={profile}
            alt=""
            className="m-0.5 h-[116px] w-[116px] rounded-full "
          />
        </div>
      </div>
      <section className="m-2 rounded-xl object-center p-2">
        <h3 className="text-xl">Technical Skills:</h3>
        <div className="flex justify-evenly">
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faSquareJs} />
          <FontAwesomeIcon icon={faGit} />
          <FontAwesomeIcon icon={faGem} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faBootstrap} />
        </div>
      </section>
      <section className="m-2 rounded-xl object-center p-2">
        <h1>My story:</h1>
        <p> Here is a summary of my background and general vibe.</p>
        <h2>Transferrable Skills:</h2>
        <p> Here is a summary of my transferrable skills</p>
      </section>
    </div>
  );
}
