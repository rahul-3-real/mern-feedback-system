import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  // State
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    communication: "",
    teamwork: "",
    leadership: "",
    adaptability: "",
    overall: "",
    comment: "",
  });

  console.log(formData);

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

  return (
    <div className="wrapper">
      <Card
        nextStep={nextStep}
        formStep={formStep}
        formData={formData}
        handleChange={handleChange}
      />
    </div>
  );
};

export default App;
