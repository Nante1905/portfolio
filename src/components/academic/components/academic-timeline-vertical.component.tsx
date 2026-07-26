"use client";

import { motion, useReducedMotion } from "motion/react";
import { AcademicTimelineProps } from "../types/academic-timeline.types";
import AcademicTimelineStep from "./academic-timeline-step.component";

const AcademicTimelineVertical = ({ items }: AcademicTimelineProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-16">
      <div className="relative">
        <span className="absolute bottom-2 left-[7px] top-2 w-px bg-gray-300" />

        <div className="flex flex-col gap-10">
          {items.map((item, index) => {
            const highlighted = index === items.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative pl-10"
              >
                <span
                  className={`absolute left-0 top-1 h-3.5 w-3.5 rounded-full ring-4 ring-white ${
                    highlighted ? "bg-green-accent" : "bg-green-primary"
                  }`}
                />

                <div
                  className={`mb-2 text-[11px] font-medium uppercase tracking-widest ${
                    highlighted ? "text-green-accent" : "text-gray-400"
                  }`}
                >
                  {item.year}
                </div>

                <AcademicTimelineStep
                  item={item}
                  index={index}
                  highlighted={highlighted}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicTimelineVertical;
