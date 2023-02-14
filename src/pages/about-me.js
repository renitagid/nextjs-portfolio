import Image from "next/image";
import Link from "next/link";
import profile from "public/profile.jpg"

export default function AboutMe() {
  return (
    <div>
      <section>
        <Image src={profile} alt="" />
      </section>
      <section>
        <h3>Technical Skills</h3>
        <div>List of skills and/or icons</div>
      </section>
      <section>
        Here is a summary of my background, skills, and general vibe
      </section>
      <h1>About Me</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}
