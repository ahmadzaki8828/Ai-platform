import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { checkSubscription } from "@/lib/subscription";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const openai = new OpenAI({ apiKey: process.env.OPENAI_APIKEY });

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      console.log("issue 301");
      return new NextResponse("Unauthorized", { status: 301 });
    }

    if (!openai.apiKey) {
      console.log("issue 500");
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }

    if (!prompt) {
      console.log("issue 400");
      return new NextResponse("Prompt are required", { status: 400 });
    }

    if (!amount) {
      console.log("issue 401");
      return new NextResponse("Amount are required", { status: 401 });
    }

    if (!resolution) {
      console.log("issue 402");
      return new NextResponse("Resolution are required", { status: 402 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (isPro) {
      await increaseApiLimit();
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
