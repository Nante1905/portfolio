"use client";

import { useMediaQuery } from "@/shared/hooks/use-media-query";
import { useScroll } from "motion/react";
import { useRef } from "react";
import AcademicTimelineRow from "../components/academic-timeline-row.component";
import AcademicTimelineVertical from "../components/academic-timeline-vertical.component";
import { AcademicItem } from "../types/academic-timeline.types";

// Chronological order (oldest → most recent). The most recent step is
// rendered as the highlighted / current milestone, mirroring the reference.
const academicMockData: AcademicItem[] = [
  {
    degree: "Baccalauréat série C",
    institution: "Lycée, Madagascar",
    field: "Mathématiques & Sciences Physiques",
    year: "2020 - 2021",
    description:
      "Mention Bien, base solide en mathématiques et raisonnement scientifique",
  },
  {
    degree: "Licence en Informatique",
    institution: "IT University, Madagascar",
    field: "Informatique & Développement Logiciel",
    year: "2021 - 2024",
    description:
      "Formation complète en génie logiciel avec focus sur développement web et mobile",
  },
  {
    degree: "Master en Informatique",
    institution: "IT University, Madagascar",
    field: "Informatique & Mathématiques",
    year: "2024 - 2025",
    description:
      "Formation approfondie en informatique avec focus sur développement logiciel et gestion de projets",
  },
  {
    degree: "MSc. BigData Intelligence for Human Augmented Reality (BIHAR)",
    institution:
      "Ecole supérieure des technologies industrielles avancées, France",
    field: "IA & Big Data",
    year: "2025 - 2026",
    description:
      "Spécialisation en analyse de données avancées et intelligence artificielle",
  },
];

const AcademicRoot = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  // const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // While the tall section scrolls past, its inner content stays pinned and
  // `scrollYProgress` drives the parcours reveal one after another.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const title = (
    <h2 className="text-center font-heading text-[4rem] font-black text-green-primary">
      Mon Parcours
    </h2>
  );

  // Mobile: classic vertical timeline, title on top.
  if (!isDesktop) {
    return (
      <section ref={sectionRef} className="relative z-10 w-full">
        {title}
        <AcademicTimelineVertical items={academicMockData} />
      </section>
    );
  }

  // // Desktop + reduced motion: no scroll hijack, everything visible at once.
  // if (reduceMotion) {
  //   return (
  //     <section ref={sectionRef} className="relative z-10 w-full py-24">
  //       {title}
  //       <AcademicTimelineRow items={academicMockData} progress={scrollYProgress} disabled />
  //     </section>
  //   );
  // }

  // Desktop: pin the section so the title stays visible while the parcours
  // fade in one by one as the user scrolls.
  return (
    <section
      ref={sectionRef}
      style={{ height: `${academicMockData.length * 60 + 100}vh` }}
      className="relative w-full"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-evenly overflow-hidden">
        {title}
        <AcademicTimelineRow
          items={academicMockData}
          progress={scrollYProgress}
        />
      </div>
    </section>
  );
};

export default AcademicRoot;
