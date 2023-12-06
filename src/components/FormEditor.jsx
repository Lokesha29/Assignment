import React, { useState } from 'react';
import QuestionComponent from './QuestionComponent'; // Import QuestionComponent for adding questions
import FormPreview from './FormPreview'; // Import FormPreview for previewing the form
import ComprehensionQuestionComponent from './ComprehensionQuestionComponent'; 

const FormEditor = () => {
  const [questions, setQuestions] = useState([]); // State to store questions
    const [showPreview, setShowPreview] = useState(false);
  // Function to add a new question
  const addQuestion = (question) => {
    setQuestions([...questions, {question, type : 'comprehension'}]);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Form Editor</h2>
      
      {/* Add Question Component */}
      <QuestionComponent addQuestion={addQuestion} />

      {/* Display Added Questions */}
      <div>
        {questions.map((question, index) => (
          <div key={index} className="p-2 mb-4 border">
            {/* Render Question Components */}
            {/* Example: Conditionally render different question types */}
            {question.type === 'Categorize' && (
              <div>
                {/* Component for Categorize question type */}
                {/* <CategorizeQuestionComponent question={question} /> */}
                {/* For other question types, create similar conditional rendering */}
              </div>
            )}
            {question.type === 'Cloze' && (
              <div>
                {/* Component for Cloze question type */}
                {/* <ClozeQuestionComponent question={question} /> */}
              </div>
            )}
            {question.type === 'comprehension' && (
              <div>
                {/* Component for Comprehension question type */}
                <ComprehensionQuestionComponent question={question.question} index={index}/>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Preview Button */}
      <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded" onClick={()=>{
        setShowPreview(true);
      }}>
        Preview Form
      </button>

      {/* Render Form Preview Component */}
     {showPreview && <FormPreview questions={questions} setShowPreview={setShowPreview} />}
    </div>
  );
};

export default FormEditor;
