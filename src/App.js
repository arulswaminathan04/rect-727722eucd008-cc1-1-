import React from 'react';
import QuestionThree from './QuestionThree';

const themes = [
  { background: 'aqua', text: 'black' },
  { background: 'yellow', text: 'white' },
  { background: 'red', text: 'white' },
  // Add more themes as needed
];

const App = () => {
  return (
      <QuestionThree themes={themes} />
  );
};

export default App;