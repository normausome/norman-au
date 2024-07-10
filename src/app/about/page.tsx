import Link from "next/link";
import Image from "next/image";

import morroImg from "../images/morroDeIrmaos.jpeg";

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-8 pb-8">
      <div className=" w-screen lg:w-1/2 p-6">
        <h1>About This Site</h1>
        <p>
          I wanted to create this website to build my skills and document my own
          journey. WordPress, SquareSpace, and Drupal can accomplish the same
          thing as what I am doing here, but I appreciate the creative art of
          being able to build, deploy, and manage your own website.
        </p>

        <h1>About Me</h1>
        <div className="flex justify-center">
          <Image
            src={morroImg}
            width={300}
            height={300}
            alt="Picture of the norman on top of a rock"
          />
        </div>

        <p>
          I hate self describing myself, because I am always in flux. However,
          if I were to describe myself in one word - optimistic. I enjoy
          laughing, learning, and sharing with others. I like to have one foot
          in the fast paced world of today, and the other foot in the calm,
          serene place of perspective.
        </p>
      </div>
      <Link href="https://normanau2.github.io/about.html">Old About Me</Link>
    </div>
  );
}
