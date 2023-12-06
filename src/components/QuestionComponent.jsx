// src/components/QuestionComponent.js
import React, { useState } from 'react';

const QuestionComponent = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');

  // Function to handle adding a new question
  const handleAddQuestion = () => {
    addQuestion(question);
    setQuestion('');
  };

  return (
    <div className="mb-4">
      <h3 className="mb-2 text-lg font-semibold">Add Question</h3>
      <textarea
        className="w-full p-2 border"
        rows="3"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      <button
        className="px-4 py-2 mt-2 text-white bg-green-500 rounded"
        onClick={handleAddQuestion}
      >
        Add Question
      </button>
    </div>
  );
};

export default QuestionComponent;
