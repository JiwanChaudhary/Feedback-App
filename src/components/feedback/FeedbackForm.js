import React from "react";
import { useState } from "react";
import Card from "../common/Card";
import Button from "../common/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ addFeedback }) => {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  function handleInputText(e) {
    setText(e.target.value);
    if (e.target.value === "" || e.target.value.trim().length <= 5) {
      setDisabled(true);
      setMessage("Text should be greater than 5 character");
    } else {
      setDisabled(false);
      setMessage("");
    }
  }
  return (
    <Card>
      <form
      onSubmit={(e) => {
          e.preventDefault();
          addFeedback({text, rating});
          setText('');
          setRating(null);
      }}>
        <h3>Please type your feedback below.</h3>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your Review"
            onChange={handleInputText}
            value={text}
          />
          <Button type="submit" version="primary" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {message && <p style={{ color: "red" }}>{message}</p>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
