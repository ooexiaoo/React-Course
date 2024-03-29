import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, {useState} from "react";
import Alert from "./Components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-' +cls)
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Choti T💩tti" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character Counter, Remove Extra Spaces" mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
