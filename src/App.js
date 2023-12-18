import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: 'white',
    
  })
  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if(mode.color==='black'){
      setMode({
        color:"white",
        backgroundColor: "black"
      })
      document.body.style.backgroundColor = 'black'
      showAlert("success", "black mode enabled")

    }
    else if(mode.color!=='black' && mode.color!=='white'){
      setMode({
        color:"white",
        backgroundColor: "black"
      })
      document.body.style.backgroundColor = 'black'
      showAlert("success", "black mode enabled")
    }
    else{
      setMode({
        color: "black",
        backgroundColor:"white"
      })
      document.body.style.backgroundColor = 'white'
      showAlert("success", "normalised")

    }
  }
  const toggleMode1 = () => {
    if(mode.color==='black'){
      setMode({
        color:" #FA8072",
        backgroundColor: "#1A2421"
      })
      document.body.style.backgroundColor = '#1A2421'
      showAlert("success", "custom mode enabled")
    }
    else if(mode.color==='white'){
      setMode({
        color:" #FA8072",
        backgroundColor: "#1A2421"
      })
      document.body.style.backgroundColor = '#1A2421'
      showAlert("success", "custom mode enabled")
    }
    else{
      setMode({
        color: "black",
        backgroundColor:"white"
      })
      document.body.style.backgroundColor = 'white'
      showAlert("success", "normalised")
    }
  }
  return (
    <>
    <Alert alert={alert} mode={mode}/>
    <Navbar title="NAM'RA" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}/>
    <TextForm  heading="Enter your text" mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
