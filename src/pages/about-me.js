import Image from "next/image";
import Link from "next/link";
import profile from "public/profile.jpg"
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div>
      <div>
        <Image src={profile} alt="" className="rounded-full w-16 m-2"/>
      </div>
      <section className="border-2 border-black m-2 rounded-xl p-2 object-center">
        <h3 className="text-xl">Technical Skills</h3>
        <div>List of skills and/or icons</div>
      </section>
      <section className="border-2 border-black m-2 rounded-xl p-2 object-center">
      <h1>My story:</h1>
       <p> Here is a summary of my background and general vibe.</p>
       <h2>Transferrable Skills:</h2>
       <p> Here is a summary of my transferrable skills</p>
      </section>
    </div>
  );
}
