export interface AcademicItem {
  degree: string;
  institution: string;
  field: string;
  year: string;
  description?: string;
}

export interface AcademicTimelineProps {
  items: AcademicItem[];
  title?: string;
  subtitle?: string;
}

export interface AcademicTimelineStepProps {
  item: AcademicItem;
  /** 0-based position, used to render the "Étape 0X" label. */
  index: number;
  /** Renders the step with the accent color (e.g. the most recent step). */
  highlighted?: boolean;
}
