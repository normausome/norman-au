import Image from "next/image";
import question1 from "./question1.jpeg";

export default function Page() {
  return (
    <div className="flex flex-col items-center pt-20 w-5/6 lg:w-3/4 mx-auto">
      <section className="border border-gray-300 shadow-lg p-6">
        <h1>Interstellar on a Plane (WARNING SPOILERS)</h1>
        <p>
          I am currently writing this on a plane watching Interstellar (for the
          second time), while disconnected to the internet - with Ollama
          (running llama 3.1) locally on my M1 Macbook Pro. Interstellar is an
          amazing movie, but there was some physics & science that I did not
          quite understand due to science. While bored on a plane without wi-fi,
          why not test out the capabilities of LocalLLM (Local Large Language
          Models).
        </p>
        <br />
        <h2>
          Between two planets, how can time move faster/slower on one planet
          than the other?
        </h2>
        <Image
          src={question1}
          alt="question1             
          width={200}
            height={200}"
        />
        <p>
          Speechless, so only about 110 years ago, Albert Einsten came up with
          the theory of General Relativity. Ahhh so this is where the saying
          "time is relative - you are neither late nor early" comes from.
          Something that I ponder about now is:
        </p>
        <ul>
          <li>How fast does time move on mars relative to earth?</li>
        </ul>
        <br />
        <p>
          Based on the mathematical formulation of gravitational time dilation
          at a glance, I would assume that the time difference would not be
          much. However, when you factor in 50 years on Earth, it might be like
          shedding off maybe a few years, which could be significant over
          generations.
        </p>
        <br />
        <h2>Conclusion</h2>
        <p>
          This experience of using a local LLM (Ollama with Llama 3.1) on a
          plane to explore complex physics concepts from Interstellar highlights
          something remarkable: we now have powerful AI tools that can run
          entirely on our personal computers, without needing internet
          connectivity. Just a decade ago, this would have seemed like science
          fiction - having an AI assistant capable of discussing Einstein's
          theory of relativity, running locally on a laptop at 30,000 feet.
          Local LLMs represent a significant step forward in making AI more
          accessible, portable, and private, opening up new possibilities for
          learning and exploration anywhere, anytime.
        </p>
      </section>
    </div>
  );
}
