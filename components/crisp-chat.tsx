"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("72e8ba4a-3e3a-4a79-a81a-7bfb19f7682c");
  }, []);

  return null;
};
