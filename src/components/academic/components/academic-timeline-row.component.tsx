"use client";

import { MotionValue } from "motion/react";
import { AcademicTimelineProps } from "../types/academic-timeline.types";
import AcademicTimelineHorizontalItem from "./academic-timeline-horizontal-item.component";

interface AcademicTimelineRowProps extends AcademicTimelineProps {
  /** Shared scroll progress driving the one-by-one reveal (0 → 1). */
  progress: MotionValue<number>;
  /** When true, every item is shown at once (no scroll-driven fade). */
  disabled?: boolean;
}

const AcademicTimelineRow = ({
  items,
  progress,
  disabled = false,
}: AcademicTimelineRowProps) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-[6vw] opacity-1!">
      <div className="flex">
        {items.map((item, index) => (
          <AcademicTimelineHorizontalItem
            key={index}
            item={item}
            index={index}
            total={items.length}
            progress={progress}
            highlighted={index === items.length - 1}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default AcademicTimelineRow;
