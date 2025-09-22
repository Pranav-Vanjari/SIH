import SolutionCard from './solutioncard';
import ExpectationAnalysis from './expectation';
import "./solution.css";

const Solution = () => {
  const solutionsData = [
    {
      id: 1,
      title: 'Simplify Compliance Guidelines',
      description: 'Provide a step-by-step explainer for MSMEs with examples of filing under the new amendment.',
      implementationSteps: [
        'Draft simplified FAQs in plain language',
        'Share industry-specific compliance examples',
        'Publish infographics for small enterprises',
      ],
    },
    {
      id: 2,
      title: 'Improve Stakeholder Consultation',
      description: 'Strengthen transparency by capturing and publishing key public concerns in the amendment process.',
      implementationSteps: [
        'Introduce a public "Consultation Report" summary',
        'Highlight accepted vs. rejected suggestions',
        'Allow extended consultation period for MSMEs',
      ],
    },
  ];

  const expectationsData = {
    expected: [
      'Simplified compliance process for MSMEs',
      'Clear guidance notes',
    ],
    got: [
      'Complex legal jargon',
      'Ambiguity in filing procedures',
    ],
  };

  return (
    <div className="home-page">
      <ExpectationAnalysis expectationsData={expectationsData} />

      <h2 className="section-title">AI Suggested Solutions</h2>
      <div className="solutions-grid">
        {solutionsData.map((solution) => (
          <SolutionCard key={solution.id} {...solution} />
        ))}
      </div>
    </div>
  );
};

export default Solution;
