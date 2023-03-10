/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import projectData from "../data/projectData.js";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import project from "public/project.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Renita Gidlund</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-8/9 bg-highlight m-3 flex flex-col items-center justify-between rounded-xl pt-12 md:m-6 md:pt-0">
          <div className="text-center">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className="bg-gradient-to-br from-orange-600 via-amber-500 to-rose-600 bg-clip-text text-center font-header text-6xl font-bold text-transparent
            
            dark:bg-gradient-to-r dark:from-rose-700 dark:via-amber-600 dark:to-rose-700">
              Hi, I'm Renita!
            </h1>
            <h2 className="text-2xl">Welcome to my portfolio.</h2>
            <div className="pt-10 leading-relaxed md:px-32">
              I am a full-stack software developer who likes solving problems
              for fun, building cool things with code, and above all,
              <span className="font-pretty text-2xl leading-3">
                &nbsp;making it pretty.
              </span>
            </div>
          </div>
          <motion.div
            whileHover={{ rotate: [0, 3, -3, 3, -3, 0], scale: 1.1 }}
            transition={{ duration: 1 }}
            className="m-10 h-[212px] w-[212px] rounded-xl bg-gradient-to-br from-orange-600 via-rose-500 to-amber-400 shadow-lg shadow-gray-700 dark:shadow-black"
          >
            <div className="m-0.5 flex h-[208px] w-[208px] flex-col rounded-xl bg-white p-2 text-center text-sm text-black">
              <Link href="/projects">
                Take a look at some of my favorite projects:
                <div className="my-2 flex justify-evenly">
                  {projectData.map((project, index) => {
                    return (
                      <div key={index} className="">
                        <Image
                          src={project.image}
                          alt="pic"
                          className="h-12 w-12 rounded-full border-2 border-orange-400 object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
                ...using some of my favorite technologies:
                <div className="mt-1 flex justify-evenly md:text-lg">
                  <FontAwesomeIcon icon={faReact} />
                  <FontAwesomeIcon icon={faSquareJs} />
                  <FontAwesomeIcon icon={faGit} />
                  <FontAwesomeIcon icon={faGem} />
                  <FontAwesomeIcon icon={faHtml5} />
                  <FontAwesomeIcon icon={faCss3} />
                  <FontAwesomeIcon icon={faBootstrap} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
