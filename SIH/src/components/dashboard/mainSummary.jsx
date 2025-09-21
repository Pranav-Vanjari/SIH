import Summary from "./summary";
function FinalSummary(){
    const sampleText = (
    <>
      The proposed amendment shows a 42% positive sentiment from stakeholders, 
      with healthcare and education being the most discussed topics.
      <br/><br/>
      Full report contains detailed breakdowns, statistical analysis, and actionable recommendations.
    </>
  );
  return(
    <>
      <Summary summaryText={sampleText}></Summary>
    </>
  );
}

export default FinalSummary;