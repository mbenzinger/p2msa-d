
import React, { useState } from "react";
import axios from "axios";

const onClickButton = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_ROUTE}/api`
  );
  return response;
};

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div>
      <button
        onClick={async () => {
          const res = await onClickButton();
          setResult(res?.data.data);
        }}
      >
        Test Me
      </button>
      <div>{result && <span>{result}</span>}</div>
    </div>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
