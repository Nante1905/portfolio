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
      loop={3}
    />
  );
};

export default AppTypeWriter;
