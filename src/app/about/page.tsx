import Link from "next/link";
import Image from "next/image";

import morroImg from "../images/morroDeIrmaos.jpeg";
import architectureDiagram from "../images/self-hosted.png";

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
        <figure>
          <Image
            src={architectureDiagram}
            alt="Picture of software architecture diagram"
            className="pt-4"
          />
          <figcaption className="flex flex-col items-center">
            Self-Hosted Architecture
          </figcaption>
        </figure>

        <p>
          The advantages of self-hosting are that I do not have to pay a company
          like SquareSpace up to{" "}
          <Link
            href="https://www.squarespace.com/pricing"
            className="hover:underline"
          >
            $192/year
          </Link>{" "}
          to host a website. The only expenses I incurred are:
        </p>
        <ul>
          <li>
            <Link href="https://www.adafruit.com/product/4564?gad_source=1&gclid=CjwKCAjw4ri0BhAvEiwA8oo6F6WImWsbc8KU-MRf4LOJ9SuyoCs9_k3IsD4BEBbQWk3GUZ1I_qqg3xoCyD0QAvD_BwE">
              Raspberry Pi 4 Model B w/ 8GB RAM - $75
            </Link>
          </li>
          <li>Domain Name - $12/year</li>
          <li>
            <Link href="https://www.amazon.com/Amazon-Basics-microSDXC-Memory-Adapter/dp/B08TJRVWV1/ref=sr_1_1_ffob_sspa?crid=8717DND3DJUA&dib=eyJ2IjoiMSJ9.wURXrQCPkQt61NVEdL51J5qByTChWHc9FiK4a75LPYLRhqWrEX2e5eW-BAp3yAQSD3hqcBr7D18Cv8HOhQbwZ4yiORbrdagIxBbM-9OiLEPYC-n4X9YydpaHFuS57oIkFi6_jOzTxb1WGlqnn20NHdhxpluuon8WP4UMadq3FpR8T_tBILVNN7_ujJHTgBkpFQxb6QNwyJDrDe1rTGzqFkd9b-VfhWCMHiLirG8ooB9-Di7iwKFitL6dwYqrFI73k3TPOFkmhhhrxbiDR-JsXY06NEZhNi7jfji8KANp6aI.AhhGXjjLeIVjFIk6YPwDJZ7kHczBWBogSg3A3Sb7lgw&dib_tag=se&keywords=micro%2Bsd%2Bcard&qid=1720672403&sprefix=micro%2Bsd%2Bcard%2Caps%2C99&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1">
              Amazon Basics Micro SDXC Memory Card w/ 128GB - $15
            </Link>
          </li>
        </ul>
        <br />
        <p>
          I will end up saving hundreds of dollars over the next few years via
          self-hosting. Plus, I can run a whole bunch of other services on this
          device like an ad blocker, media & samba server, and a password
          manager (for funsies - not seriously of course)!
        </p>

        <h1>About Me</h1>
        <div className="flex justify-center">
          <Image
            src={morroImg}
            width={300}
            height={300}
            alt="Picture of norman on top of a rock"
            className="rounded-lg"
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
