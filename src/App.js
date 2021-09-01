import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  fetch("https://react-karaoke-v3.herokuapp.com/")
    .then((res) => res.json())
    .then((data) => console.log(data));
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
