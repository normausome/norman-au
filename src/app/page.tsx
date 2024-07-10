import Image from "next/image";

import { ModeToggle } from "@/components/ModeToggle";
import { TypingEffect } from "@/components/TypingEffect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-4 p-8">
      {/* <ModeToggle /> */}
      <TypingEffect />
    </main>
  );
}
