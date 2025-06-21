import Login from "./component/Login.jsx"
import Pages from "./component/pages.jsx"
import "./App.css"
import AfterLogin from "./component/Afterlogin.jsx";

function App() {


  let log = true;
  return (log ?<><Pages/><Login/></>:<AfterLogin/>)



}

export default App;

