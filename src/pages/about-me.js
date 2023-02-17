/* eslint-disable react/no-unescaped-entities */
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
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <div className="md:px-20">
      <div className="mt-2 md:mt-0 flex flex-col items-center md:flex-row md:justify-evenly">
        <h1 className="mt-2 font-header text-4xl">About Me</h1>
        <div className="m-2 h-[110px] w-[110px] rounded-full bg-gradient-to-br from-orange-600 via-rose-400 to-amber-300 shadow-sm shadow-gray-700 dark:shadow-black">
          <Image
            src={profile}
            alt=""
            className="m-0.5 h-[106px] w-[106px] rounded-full "
          />
        </div>
      </div>
      <section className="m-2 mt-0 rounded-xl object-center p-2">
        <div className="flex justify-evenly md:text-3xl">
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faSquareJs} />
          <FontAwesomeIcon icon={faGit} />
          <FontAwesomeIcon icon={faGem} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faBootstrap} />
        </div>
      </section>
      <div className=" m-2 mx-4 h-[300px] md:h-[300px] rounded-xl bg-gradient-to-br from-orange-400 to-amber-300 object-center shadow-md shadow-gray-500 dark:shadow-black overflow-hidden border-2 border-transparent">
        <div className="overflow-scroll dark:overflow-auto relative h-[296px] rounded-xl bg-white object-center p-4 dark:bg-neutral-700 ">
          <h1 className="font-pretty text-xl">My story:</h1>
          <p className="mb-2">
            I am a career transitioner - I spent 12 years in the field of ABA,
            teaching new skills to kids with autism, and training my staff to do
            the same. Now I've changed trajectories, and am building websites
            and coding solutions to completely different kinds of problems. To
            give some more personal insight into who I am, I'm also a mom, run
            an Etsy shop for wooden puzzles and hand-felted wool crafts,
            complete the NYT crossword puzzle daily, and just helped my team win
            first place in a competitive jigsaw puzzling event! Skeptical about
            hiring someone who doesn't have 5-10 years of experience coding?
            Here's what else I bring to the table..
          </p>
          <h2 className="font-pretty text-xl">Creative Problem Solving</h2>
          <p className="mb-2">
            My entire career has been about creative problem solving! In the
            field of ABA, the main philosophy is analyzing a problem, breaking
            it down to smaller parts, and identifying which strategies or tools
            can be used to solve it. Typically the problems I’ve solved relate
            more to human behavior, but the same principles can be applied to
            coding!
          </p>
          <h2 className="font-pretty text-xl">Project Management</h2>
          <p className="mb-2">
            During my time as assistant director of a small ABA clinic, I helped
            manage several projects involving time management systems,
            accountability check-ins, adherence to a schedule, and consistent
            organization. These skills have been crucial within my experience in
            development as well, to stay on top of all the various elements of a
            project and get it deployed within the timeline that is expected.
          </p>
          <h2 className="font-pretty text-xl">Supervising and Leading a Team</h2>
          <p className="mb-2">
            As a clinical supervisor, my key responsibilities included training,
            mentoring, coaching, and providing feedback to my staff. I have
            extensive experience providing feedback effectively, managing
            conflicts between team members, and presenting information in a way
            that is clear, accessible, and actionable
          </p>
          <h2 className="font-pretty text-xl">Managing Stakeholder Expectations</h2>
          <p className="mb-2">
            I was typically the main contact point for parents whose children
            were receiving therapy, which has given me almost a decade of
            experience in discussing progress, at times working through
            difficult conversations. These experiences have given me quite a lot
            of practice in communicating clearly, finding solutions that work
            for everyone, standing up for my team when needed, and setting
            realistic expectations in a positive way, even when it may not be
            exactly what someone wants to hear.
          </p>
        </div>
      </div>
    </div>
  );
}
