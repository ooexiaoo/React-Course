import "./App.css";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
<Navbar title="💩"/>
<div className="container my-3">
<TextForm heading="Text to analyze"/>
</div>
    </>
  );
}

export default App;
