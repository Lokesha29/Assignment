// src/components/FormPreview.js
import React, { useState } from 'react';

const FormPreview = ({ questions, setShowPreview }) => {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(''));

  // Function to handle user's answer input change
  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const saveAnswers = (answers) => {
    setShowPreview(false)
  }

  return (
    <div className="p-4">
        
      <div className='flex items-center justify-between '>
        <h2 className="mb-4 text-lg font-semibold">Form Preview</h2>
        <button onClick={()=>{
            setShowPreview(false)
        }}> Close Preview</button>
        </div>
      <div>
        {questions.map((question, index) => (
          <div key={index} className="p-2 mb-4 border">
            {/* Display Question */}
            <div>{index + 1}. {question.question}</div>

            {/* Provide Input for Answer */}
            <input
              type="text"
              placeholder="Enter your answer"
              className="p-2 mt-2 border"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* You can add a button to save answers here */}
      {/* Handle saving the 'answers' state to your backend or wherever you're storing the form responses */}
      <button className='px-4 py-2 mt-4 text-white bg-blue-500 rounded' onClick={saveAnswers}>Save Answers</button>
    </div>
  );
};

export default FormPreview;
