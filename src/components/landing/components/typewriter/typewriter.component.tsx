"use client";

import { Typewriter } from "react-simple-typewriter";

const AppTypeWriter = () => {
  return (
    <Typewriter
      words={["web applications", "mobile apps", "digital products"]}
      loop={3}
    />
  );
};

export default AppTypeWriter;
