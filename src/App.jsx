import { React, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { PersonalInfo } from "./pages/PersonalInfo";
import { SelectPlan } from "./pages/SelectPlan";
import { AddOns } from "./pages/AddOns";
import Summary from "./pages/Summary";
import ThankYou from "./pages/ThankYou";
import Button from "./components/Button";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({});

  const getActiveStep = (pathName) => {
    if (pathName === "/") return 1;
    if (pathName === "/select-plan") return 2;
    if (pathName === "/add-ons") return 3;
    if (pathName === "/summary") return 4;
    if (pathName === "/thank-you") return 4;
    return 1;
  };

  const currentStep = getActiveStep(location.pathname);

  const handleGoBack = () => {
    const path = location.pathname;
    if (path === "/summary") {
      navigate("/add-ons");
    } else if (path === "/add-ons") {
      navigate("/select-plan");
    } else if (path === "/select-plan") {
      navigate("/");
    }
  };

  // Handler for PersonalInfo step completion
  const handlePersonalInfoSubmit = (personalInfoData) => {
    setFormData((prevData) => ({ ...prevData, ...personalInfoData }));
    navigate("/select-plan");
  };

  // Handler for SelectPlan step completion
  const handleSelectPlanSubmit = (planData) => {
    setFormData((prevData) => ({ ...prevData, ...planData }));
    navigate("/add-ons");
  };

  //Handler for AddOns step completion
  const handleAddOnsSubmit = (addOnsData) => {
    setFormData((prevData) => ({ ...prevData, ...addOnsData }));
    navigate("/summary");
  };

  //Handler for final submission
  const handleFinalSubmit = () => {
    navigate("/thank-you");
  };

  return (
    <div className="bg-blue-100 min-h-screen font-ubuntu md:flex md:justify-center md:items-center overflow-y-auto">
      <div className="w-full md:flex md:w-full md:max-w-[940px] md:h-[600px] md:bg-white md:p-4 md:rounded-2xl md:shadow-lg">
        <SideBar activeStep={currentStep} />

        <div className="flex-1 flex flex-col">
          <main className="relative z-20 bg-white rounded-lg p-6 mx-4 -mt-18 md:bg-transparent shadow-lg md:shadow-none md:mx-0 md:p-0 md:mt-0 md:pt-10 md:px-14">
            <Routes>
              <Route
                path="/"
                element={
                  <PersonalInfo
                    onNextStep={handlePersonalInfoSubmit}
                    formData={formData}
                  />
                }
              />
              <Route
                path="/select-plan"
                element={
                  <SelectPlan
                    onNextStep={handleSelectPlanSubmit}
                    formData={formData}
                  />
                }
              />
              <Route
                path="/add-ons"
                element={
                  <AddOns onNextStep={handleAddOnsSubmit} formData={formData} />
                }
              />
              <Route
                path="/summary"
                element={
                  <Summary formData={formData} onNextStep={handleFinalSubmit} />
                }
              />
              <Route
                path="/thank-you"
                element={<ThankYou formData={formData} />}
              />
            </Routes>
          </main>

          {location.pathname !== "/thank-you" && (
            <div className="hidden md:flex justify-between items-center p-4 mt-auto md:px-16">
              {location.pathname !== "/" ? (
                <Button variant="secondary" onClick={handleGoBack}>
                  Go Back
                </Button>
              ) : (
                <div />
              )}

              {location.pathname === "/summary" ? (
                <Button
                  type="submit"
                  form="step-form"
                  className="bg-purple-700 hover:bg-purple-900"
                >
                  Confirm
                </Button>
              ) : (
                <Button type="submit" form="step-form">
                  Next Step
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {location.pathname !== "/thank-you" && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white p-3 flex justify-between items-center md:hidden">
          {location.pathname !== "/" ? (
            <Button variant="secondary" onClick={handleGoBack}>
              Go Back
            </Button>
          ) : (
            <div />
          )}

          {location.pathname === "/summary" ? (
            <Button
              type="submit"
              form="step-form"
              className="bg-purple-800 hover:bg-purple-900"
            >
              Confirm
            </Button>
          ) : (
            <Button type="submit" form="step-form">
              Next Step
            </Button>
          )}
        </footer>
      )}
    </div>
  );
}

export default App;
