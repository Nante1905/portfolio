"use client";

import { Typewriter } from "react-simple-typewriter";

const AppTypeWriter = () => {
  return (
    <Typewriter
      words={[
        "des applications web",
        "des applications mobiles",
        "vos projets numériques",
      ]}
      loop={2}
    />
  );
};

export default AppTypeWriter;
