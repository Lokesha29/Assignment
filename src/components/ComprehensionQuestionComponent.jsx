import React from 'react'

const ComprehensionQuestionComponent = ({question, index}) => {
  return (
    <div>{index + 1}. {question}</div>
  )
}

export default ComprehensionQuestionComponent