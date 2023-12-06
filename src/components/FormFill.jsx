import React from 'react';

const FormFill = ({ questions }) => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Fill Form</h2>
      <form>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            {/* Render Input Fields for Each Question */}
            {/* You need to create input fields based on question type */}
            {/* For example: */}
            {/* <InputFieldComponent question={question} /> */}
          </div>
        ))}
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
          Submit Answers
        </button>
      </form>
    </div>
  );
};

export default FormFill;
