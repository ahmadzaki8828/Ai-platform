"use client";

import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import Link from "next/link";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-[#fefae0] font-bold py-30 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Welcome to Athena</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#fefae0] via-[#606c38] to-[#283618]">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-[#fefae0]">
        Generate content using AI powered by ChatGPT and Replicate AI
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant={"upgrade"}
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Try out for free
          </Button>
        </Link>
      </div>
      <div className="text-[#fefae0] text-xs md:text-sm font-normal">
        No card information required
      </div>
    </div>
  );
};
