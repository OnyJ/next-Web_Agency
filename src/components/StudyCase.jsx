import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import study_cases from "../languages/fr/study_cases.json";
import studyCases from "../components/studyCases";
// format correctly message
import { FormattedMessage } from "react-intl";

const StudyCase = () => {
  // console.log(study_cases[0].clientname);
  // let urlName = useRouteMatch();

  const { clientName } = useParams();
  // study_cases.forEach((study_case) => console.log(clientName));
  const [currentStudyCase, setCurrentStudyCase] = useState(null);

  // console.log(clientName);
  //

  useEffect(() => {
    setCurrentStudyCase(
      // study_cases.find((study_case) => study_case.clientname === clientName)
      studyCases.find((studyCase) => studyCase.name === clientName)

      // Object.keys(study_cases).map((key) => {
      // console.log(study_cases[key].clientname === clientName);
      // })
      // Object.keys(study_cases).find(
      // (study_case) => study_case.clientname === clientName
      // )
    );
  }, [clientName]);

  return (
    <>
      {console.log(currentStudyCase)}
      <h4>{currentStudyCase.title}</h4>
      <FormattedMessage id="study_case.clientname" />
    </>
  );
};

export default StudyCase;
