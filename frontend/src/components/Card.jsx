import { Button, Input, Rating, Select, Textarea } from "./Input";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="title">Submit Your Feedback</h5>
      </div>
      <div className="card-body">
        <form method="POST">
          <Input id="name" type="text" name="name" label="Full Name" required />

          <Input
            id="email"
            type="email"
            name="email"
            label="Email Address"
            required
          />

          <Input
            id="company"
            type="text"
            name="company"
            label="Company Name"
            required
          />

          <Select
            id="position"
            name="position"
            label="Position / Relationship"
            required
            options={["Colleague", "Employer", "Freelance Client", "Other"]}
          />

          <Rating
            id="communication"
            name="communication"
            label="Communication Skills"
            required
          />

          <Rating id="teamwork" name="teamwork" label="Teamwork" required />

          <Rating
            id="leadership"
            name="leadership"
            label="Leadership"
            required
          />

          <Rating
            id="adaptability"
            name="adaptability"
            label="Adaptability"
            required
          />

          <Rating
            id="overall"
            name="overall"
            label="Overall, how satisfied are you with the performance?"
            required
          />

          <Textarea
            id="comment"
            name="comment"
            label="Comments or Suggestions"
            required
          />

          <Button
            id="submit-feedback-btn"
            type="submit"
            value="Submit Feedback"
            classList="btn-primary"
          />
        </form>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

export default Card;
