interface AcademicItem {
  degree: string;
  institution: string;
  field: string;
  year: string;
  description?: string;
}

interface AcademicTimelineProps {
  items: AcademicItem[];
}

const AcademicTimelineComponent = ({ items }: AcademicTimelineProps) => {
  return (
    <div className="py-4">
      <div className="relative flex flex-col gap-8">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/30 to-transparent"></div>

        {items.map((item, index) => (
          <div key={index} className="flex gap-6 relative">
            {/* Timeline marker */}
            <div
              className="relative w-8 h-8 rounded-full border-4 border-white flex-shrink-0 mt-1"
              style={{
                background: "linear-gradient(135deg, #589cb0 0%, #3d6b80 100%)",
                boxShadow: "0 0 15px rgba(88, 156, 176, 0.2)",
              }}
            >
              <div className="absolute inset-2 rounded-full bg-white/30"></div>
            </div>

            {/* Timeline content */}
            <div className="flex flex-col gap-1 pb-4 flex-1">
              <div className="text-green-accent text-xs font-semibold uppercase tracking-wider">
                {item.year}
              </div>
              <div className="flex-1">
                <h4 className="text-green-secondary text-lg font-semibold mb-1">
                  {item.degree}
                </h4>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  {item.institution}
                </p>
                <p className="text-gray-400 text-xs mb-3">{item.field}</p>
                {item.description && (
                  <p className="text-gray-500 text-xs leading-relaxed italic">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicTimelineComponent;
