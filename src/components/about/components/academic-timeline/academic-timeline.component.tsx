import "./academic-timeline.component.scss";

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
    <div className="academic-timeline py-4">
      <div className="academic-timeline_container">
        {items.map((item, index) => (
          <div key={index} className="academic-timeline_item">
            <div className="academic-timeline_marker"></div>

            <div className="academic-timeline_content">
              <div className="academic-timeline_year">{item.year}</div>
              <div className="academic-timeline_body">
                <h4 className="academic-timeline_degree">{item.degree}</h4>
                <p className="academic-timeline_institution">
                  {item.institution}
                </p>
                <p className="academic-timeline_field">{item.field}</p>
                {item.description && (
                  <p className="academic-timeline_description">
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
