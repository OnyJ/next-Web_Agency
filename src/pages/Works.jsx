import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudyCase from "../components/StudyCase";
import study_cases from "../languages/fr/study_cases";

const Works = () => {
  //const displayCases = () => {
  //  let cases = <></>;
  //  Object.keys(study_cases).forEach(function (key) {
  //    console.log(key, study_cases[key]);
  //    cases += (
  //      <div>
  //        <h4>
  //          <FormattedMessage id={`study_cases.${key}.title`} />
  //        </h4>
  //        <p>hello{/* <FormattedMessage id="study_cases.platon." /> */}</p>
  //      </div>
  //    );
  //  });
  //  return cases;
  //};

  return (
    <>
      <h3>
        <FormattedMessage id="works.title" />
      </h3>
      <p>
        <FormattedMessage id="works.text" />
      </p>
      {/* <Switch> */}
      {/* <Route exact path="/works/:clientName"> */}
      {/* <StudyCase /> */}
      {/* </Route> */}
      {/* </Switch> */}
      <Router>
        <nav>
          {Object.keys(study_cases).map((key) => (
            <>
              <div>
                <h4>
                  <FormattedMessage id={`study_cases.${key}.title`} />
                </h4>
                <Link
                  to={`/works/${study_cases[key].clientname}`}
                  id={`study_cases.${key}.clientname`}
                >
                  <FormattedMessage id={`study_cases.${key}.clientname`} />
                </Link>
              </div>
            </>
          ))}
        </nav>
        <div>
          <Switch>
            {/* {Object.keys(study_cases).map((key) => ( */}
            {/* <> */}
            {/* <Route exact path={`/works/:${study_cases[key].clientname}`}> */}
            <Route exact path={`/works/:clientname`}>
              <StudyCase />
            </Route>
            {/* </> */}
            {/* ))} */}
          </Switch>
        </div>
      </Router>

      {/* <FormattedMessage id={`study_cases.0.title`} /> */}
    </>
  );
};

export default injectIntl(Works);

// save working in console :
// const displayCases = () => {
//   let cases = <></>;
//   Object.keys(study_cases).forEach(function (key) {
//     console.log(key, study_cases[key]);
//     cases += (
//       <div>
//         <h4>
//           <FormattedMessage id={`study_cases.${key}.title`} />
//         </h4>
//         <p>hello{/* <FormattedMessage id="study_cases.platon." /> */}</p>
//       </div>
//     );
//   });
//   return cases;
// };
