import React from "react";

const FeedbackItem = ({item}) => {
  return (
    <>
      <div className="card">
        <div className="num-display">{item.rating}</div>
        <p>{item.text}</p>
      </div>
    </>
  );
};

export default FeedbackItem;
