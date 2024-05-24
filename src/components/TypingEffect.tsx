"use client";

import React, { useEffect, useState } from "react";

export function TypingEffect() {
  return (
    <div>
      <div className="font-mono text-[10px] xl:text-xl font-mono typing-container">
        <div className=" typing">
          my name is norman au. i was bitten by a radioactive spider...
          <span className="animate-blink">|</span>
        </div>

        <style jsx>{`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
          .typing-container {
            display: inline-block;
            position: relative;
            max-width: 100%;
          }
          .typing {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid black;
            animation: typing 4s steps(30, end) forwards;
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
