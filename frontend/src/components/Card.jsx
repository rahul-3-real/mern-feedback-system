import { useState } from "react";
import { Button, Input, Rating, Select, Textarea } from "./Input";
import Portal from "./Portal";

const Card = ({
  nextStep,
  formStep,
  formData,
  handleChange,
  handleSubmitted,
}) => {
  const [errorMessages, setErrorMessages] = useState([]);

  const firstStep = () => {
    const validateFirstStep = () => {
      const requiredFields = ["name", "email", "company", "relationship"];
      const allFieldsFilled = requiredFields.every(
        (field) => !!formData[field]
      );
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      setErrorMessages([]);

      if (!allFieldsFilled) {
        setErrorMessages((prevMessages) => [
          ...prevMessages,
          "Please fill in all required fields.",
        ]);

        setTimeout(() => {
          setErrorMessages([]);
        }, 5000);
      }
      if (!isEmailValid) {
        setErrorMessages((prevMessages) => [
          ...prevMessages,
          "Please enter a valid email address.",
        ]);

        setTimeout(() => {
          setErrorMessages([]);
        }, 5000);
      }

      return allFieldsFilled && isEmailValid;
    };

    const onClickHandler = () => {
      if (validateFirstStep()) {
        nextStep();
      }
    };

    return (
      <fieldset className={`fieldset ${formStep === 1 ? "active" : ""}`}>
        <Input
          id="name"
          type="text"
          name="name"
          label="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          id="email"
          type="email"
          name="email"
          label="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          id="company"
          type="text"
          name="company"
          label="Company Name"
          required
          value={formData.company}
          onChange={handleChange}
        />

        <Select
          id="relationship"
          name="relationship"
          label="Position / Relationship"
          required
          options={["Colleague", "Employer", "Freelance Client", "Other"]}
          value={formData.relationship}
          onChange={handleChange}
        />

        <Button
          classList="btn-outline-primary"
          type="button"
          onClick={() => onClickHandler()}
          value="Next"
        />
      </fieldset>
    );
  };

  const secondStep = () => {
    const validateSecondStep = () => {
      const requiredFields = [
        "communicationSkills",
        "teamwork",
        "leadership",
        "adaptability",
        "overallSatisfaction",
      ];
      const allFieldsFilled = requiredFields.every(
        (field) => !!formData[field]
      );
      setErrorMessages([]);

      if (!allFieldsFilled) {
        setErrorMessages((prevMessages) => [
          ...prevMessages,
          "Please Select all required fields.",
        ]);

        setTimeout(() => {
          setErrorMessages([]);
        }, 5000);
      }

      return allFieldsFilled;
    };

    const onClickHandler = () => {
      if (validateSecondStep()) {
        nextStep();
      }
    };

    return (
      <fieldset className={`fieldset ${formStep === 2 ? "active" : ""}`}>
        <Rating
          id="communicationSkills"
          name="communicationSkills"
          label="Communication Skills"
          required
          value={formData.communicationSkills}
          onChange={handleChange}
        />

        <Rating
          id="teamwork"
          name="teamwork"
          label="Teamwork"
          required
          value={formData.teamwork}
          onChange={handleChange}
        />

        <Rating
          id="leadership"
          name="leadership"
          label="Leadership"
          required
          value={formData.leadership}
          onChange={handleChange}
        />

        <Rating
          id="adaptability"
          name="adaptability"
          label="Adaptability"
          required
          value={formData.adaptability}
          onChange={handleChange}
        />

        <Rating
          id="overallSatisfaction"
          name="overallSatisfaction"
          label="Overall, how satisfied are you with the performance?"
          required
          value={formData.overallSatisfaction}
          onChange={handleChange}
        />

        <Button
          classList="btn-outline-primary"
          type="button"
          onClick={() => onClickHandler()}
          value="Next"
        />
      </fieldset>
    );
  };

  const thirdStep = () => {
    const validateThirdStep = () => {
      const requiredFields = ["comments"];
      const allFieldsFilled = requiredFields.every(
        (field) => !!formData[field]
      );
      setErrorMessages([]);

      if (!allFieldsFilled) {
        setErrorMessages((prevMessages) => [
          ...prevMessages,
          "Please fill in all required fields.",
        ]);

        setTimeout(() => {
          setErrorMessages([]);
        }, 5000);
      }

      return allFieldsFilled;
    };

    const onClickHandler = () => {
      const saveData = async () => {
        try {
          const url = `http://localhost:3001/api/submit-feedback`;
          const options = {
            method: "post",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          };

          const response = await fetch(url, options);

          if (response.ok) {
            await response.json();
            handleSubmitted();
          } else {
            console.error("Failed to post feedback");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      if (validateThirdStep()) {
        saveData();
      }
    };

    return (
      <fieldset className={`fieldset ${formStep === 3 ? "active" : ""}`}>
        <Textarea
          id="comments"
          name="comments"
          label="Comments or Suggestions"
          required
          value={formData.comments}
          onChange={handleChange}
        />

        <Button
          id="submit-feedback-btn"
          type="button"
          value="Submit Feedback"
          classList="btn-primary"
          onClick={onClickHandler}
        />
      </fieldset>
    );
  };

  return (
    <>
      <Portal classList={`toaster ${errorMessages.length > 0 ? "active" : ""}`}>
        {errorMessages.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </Portal>
      <div className="card">
        <div className="card-header">
          <h5 className="title">Submit Your Feedback</h5>
        </div>
        <div className="card-body">
          <form method="POST">
            {formStep === 1 && firstStep()}
            {formStep === 2 && secondStep()}
            {formStep === 3 && thirdStep()}
            {/* {firstStep()}
            {secondStep()}
            {thirdStep()} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
