"use client";

import {
  easeInOut,
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { AcademicItem } from "../types/academic-timeline.types";
import AcademicTimelineStep from "./academic-timeline-step.component";

interface AcademicTimelineHorizontalItemProps {
  item: AcademicItem;
  index: number;
  total: number;
  /** Shared scroll progress of the pinned section (0 → 1). */
  progress: MotionValue<number>;
  highlighted: boolean;
  /** When true, the item is shown fully (no scroll-driven fade). */
  disabled?: boolean;
}

const AcademicTimelineHorizontalItem = ({
  item,
  index,
  total,
  progress,
  highlighted,
}: AcademicTimelineHorizontalItemProps) => {
  // The reveal happens over the first `REVEAL_END` of the scroll; the rest of
  // the pin holds every parcours fully visible. Each item owns an equal slice
  // of that window and fades in over it, so they appear one after another.
  // `clamp` keeps opacity at 1 past each item's slice — an item never fades
  // back out once shown.
  const REVEAL_END = 0.9;
  const span = REVEAL_END / total;
  const start = index * span;
  const end = start + span;

  const opacity = useTransform(progress, [start, end, 1], [0, 1, 1], {
    ease: easeInOut,
    clamp: true,
  });

  useMotionValueEvent(opacity, "change", (e) => {
    if (index === 0) {
      console.log("end", end);
      console.log(e.toFixed(3));
    }
  });

  return (
    <motion.div style={{ opacity }} className="min-w-0 flex-1">
      {/* Date above the tick */}
      <div
        className={`mb-3 text-[11px] font-medium uppercase tracking-widest ${
          highlighted ? "text-green-accent" : "text-gray-400"
        }`}
      >
        {item.year}
      </div>

      {/* Continuous line with tick above and dot hanging below */}
      <div className="relative border-t border-gray-300">
        <span className="absolute left-0 top-0 h-2.5 w-px -translate-y-full bg-gray-300" />
        <span
          className={`absolute left-0 top-0 h-7 w-px ${
            highlighted ? "bg-green-accent" : "bg-green-primary"
          }`}
        />
        <span
          className={`absolute left-0 top-7 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-white ${
            highlighted ? "bg-green-accent" : "bg-green-primary"
          }`}
        />
      </div>

      {/* Step content below the dot */}
      <div className="pr-5 pt-12">
        <AcademicTimelineStep
          item={item}
          index={index}
          highlighted={highlighted}
        />
      </div>
    </motion.div>
  );
};

export default AcademicTimelineHorizontalItem;
