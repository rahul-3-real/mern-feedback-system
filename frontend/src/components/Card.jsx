import { useState } from "react";
import { Button, Input, Rating, Select, Textarea } from "./Input";
import Portal from "./Portal";

const Card = ({ nextStep, formStep, formData, handleChange }) => {
  const [errorMessages, setErrorMessages] = useState([]);

  const firstStep = () => {
    const validateFirstStep = () => {
      const requiredFields = ["name", "email", "company", "position"];
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
      } else {
        console.log(errorMessages);
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
          id="position"
          name="position"
          label="Position / Relationship"
          required
          options={["Colleague", "Employer", "Freelance Client", "Other"]}
          value={formData.position}
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
        "communication",
        "teamwork",
        "leadership",
        "adaptability",
        "overall",
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
      } else {
        console.log(errorMessages);
      }
    };
    return (
      <fieldset className={`fieldset ${formStep === 2 ? "active" : ""}`}>
        <Rating
          id="communication"
          name="communication"
          label="Communication Skills"
          required
          value={formData.communication}
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
          id="overall"
          name="overall"
          label="Overall, how satisfied are you with the performance?"
          required
          value={formData.overall}
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
      const requiredFields = ["comment"];
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
      console.log("123");
      if (validateThirdStep()) {
        console.log(formData);
      } else {
        console.log(errorMessages);
      }
    };

    return (
      <fieldset className={`fieldset ${formStep === 3 ? "active" : ""}`}>
        <Textarea
          id="comment"
          name="comment"
          label="Comments or Suggestions"
          required
          value={formData.comment}
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
            {/* {formStep === 1 && firstStep()}
          {formStep === 2 && secondStep()}
          {formStep === 3 && thirdStep()} */}
            {firstStep()}
            {secondStep()}
            {thirdStep()}
          </form>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
};

export default Card;
