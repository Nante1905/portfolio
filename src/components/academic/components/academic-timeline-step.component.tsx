"use client";

import { AcademicTimelineStepProps } from "../types/academic-timeline.types";

const AcademicTimelineStep = ({
  item,
  highlighted = false,
}: AcademicTimelineStepProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <h4
        className={`font-heading text-sm font-bold leading-snug sm:text-base ${
          highlighted ? "text-green-accent" : "text-green-primary"
        }`}
      >
        {item.degree}
      </h4>

      <p
        className={`text-xs font-medium ${
          highlighted ? "text-green-accent/80" : "text-black"
        }`}
      >
        {item.institution}
      </p>

      <p
        className={`text-xs ${
          highlighted ? "text-green-accent/70" : "text-gray-800"
        }`}
      >
        {item.field}
      </p>
    </div>
  );
};

export default AcademicTimelineStep;
