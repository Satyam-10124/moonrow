// App.jsx

import React from 'react';

import Feedback from './components/Feedback'; // Assuming Feedback.jsx is in the 'components' folder
import Footer from './components/Footer';     // Assuming Footer.jsx is in the 'components' folder
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Render the Feedback component just above the Footer */}
      <Feedback />

      {/* Your Footer component */}
      <Footer />
    </div>
  );
}

export default App;