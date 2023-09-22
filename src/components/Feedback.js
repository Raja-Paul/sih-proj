import React, { useState } from 'react';

const Feedback = () => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission here
    console.log('Feedback submitted:', feedbackText);
    setFeedbackText('');
  };

  return (
    <div className="feedback">
      <h3>Feedback</h3>
      <form onSubmit={handleFeedbackSubmit}>
        <textarea
          rows="4"
          placeholder="Provide your feedback..."
          value={feedbackText}
          onChange={handleFeedbackChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
