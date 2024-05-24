"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Ahmad",
    avatar: "A",
    title: "Computer Science student",
    description: "My first proper app",
  },
  {
    name: "Elaf",
    avatar: "Z",
    title: "Kinesiology Student",
    description: "Current struggling in 2nd year",
  },
  {
    name: "Akbar",
    avatar: "A",
    title: "Buisness Student",
    description: "Always complaining about assignments",
  },
  {
    name: "Sanan",
    avatar: "S",
    title: "Medical Student",
    description: "Might end up a crypto trader",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-[#fefae0] font-extrabold mb-10">
        Random Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((items) => (
          <Card
            key={items.description}
            className="bg-[#bc6c25] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex-tiems-center gap-x-2">
                <div>
                  <p className="text-lg">{items.name}</p>
                  <p className="text-[#fefae0] text-sm">{items.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {items.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
