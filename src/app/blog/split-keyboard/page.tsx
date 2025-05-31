import Image from "next/image";
import keyboard1 from "./keyboard1.jpg";
import keyboard2 from "./keyboard2.jpg";
import keyboard3 from "./keyboard3.jpg";
import keyboard4 from "./keyboard4.jpg";

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-20 w-5/6 lg:w-3/4 mx-auto">
      <section className="border border-gray-300 shadow-lg p-6">
        <h1>Building a Cheapino (Split Keyboard)</h1>
        <p>
          Typically a split keyboard can range anywhere on the low-end from $100 all the way up to $300; however, a cheapino cost $40 (not including switches and keycaps). A pretty big difference in price, but building a cheapino requires a lot of hustle hours if one does not know how to solder, like me. (ʘ‿ʘ)
        </p>
        <br />
        <h2>How it started?</h2>
        <p>
          It started with me spending about 8+ hours a day on my computer and wanting a different form factor for typing. After scouring the internet for split keyboards, I found out that they were way out of my budget. Once I found out I could build a split keyboard for ~$40, I went ahead and bought all of the parts from aliexpress from the github repo.
        </p>
        <br />
        <h2>The Process</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Image
            src={keyboard1}
            alt="Keyboard build process - parts laid out"
            width={300}
            height={200}
            style={{ borderRadius: "8px" }}
          />
          <Image
            src={keyboard2}
            alt="Keyboard build process - assembly"
            width={300}
            height={200}
            style={{ borderRadius: "8px" }}
          />
          <Image
            src={keyboard3}
            alt="Soldering work close-up"
            width={300}
            height={200}
            style={{ borderRadius: "8px" }}
          />
        </div>
        <p>
          My friend Jacob Shade, who I have known for 10+ years was a tremendous help in this project. He taught me how solder and make good connections from the solder wire to the PCB (printed circuit board). We spent ~4 hours soldering all of the joints, and then I wondered... &quot;How are we going to know that the connections are solid?&quot;
        </p>
        <br />
        <div className="flex justify-center">
          <Image
            src={keyboard4}
            alt="Completed split keyboard"
            width={300}
            height={200}
            style={{ borderRadius: "8px" }}
          />
        </div>
        <p>
          Welp, you know that tool that you use in Physics II that measures current? Yup, a multimeter would have been really handy in this scenario. We continued soldiering on and after soldering all of the switches in place and flashing the keyboard with qmk (allows custom keymapping) - it was alive!
        </p>
        <br />
        <h2>Lessons Learned</h2>
      </section>
    </div>
  );
}