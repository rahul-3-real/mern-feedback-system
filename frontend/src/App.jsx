import { useState } from "react";
import Card from "./components/Card";
import ThankYou from "./static/images/thank-you.png";

const App = () => {
  // State
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    relationship: "",
    communicationSkills: "",
    teamwork: "",
    leadership: "",
    adaptability: "",
    overallSatisfaction: "",
    comments: "",
  });

  // Functions
  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const handleChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      const { name, value } = e;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmitted = () => {
    setSubmitted(true);
    localStorage.setItem("submitted", true);
  };

  return (
    <div className="wrapper">
      {!localStorage.getItem("submitted") && (
        <Card
          nextStep={nextStep}
          formStep={formStep}
          formData={formData}
          handleChange={handleChange}
          handleSubmitted={handleSubmitted}
          submitted={submitted}
        />
      )}
      {localStorage.getItem("submitted") && (
        <div className="card success">
          <div className="card-body">
            <img src={ThankYou} alt="Thank You" />
            <div>
              <h1 className="title">Feedback submitted!</h1>
              <p>
                Thank you for submitting your feedback. Your input is crucial in
                helping me understand and improve my services. I appreciate your
                valuable contribution!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
