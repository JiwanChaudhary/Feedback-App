import React from "react";
import Header from "./components/Header";
// import { FeedbackData } from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  console.log(feedback);
  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
    </>
  );
};

export default App;
