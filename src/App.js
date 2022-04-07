import React from "react";
import Header from "./components/Header";
// import { FeedbackData } from "./data/FeedbackData";
import FeedbackList from "./components/feedback/FeedbackList";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/common/Card";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
      <Card> Children </Card>
    </>
  );
};

export default App;
