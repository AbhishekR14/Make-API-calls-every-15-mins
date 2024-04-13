import "./App.css";
import axios from "axios";
const URL = "https://payyourfren.onrender.com/api/v1/user/getusername";

function App() {
  const makeRequest = () => {
    axios
      .get(URL)
      .then((response) => {
        console.log("Call Made to :- " + URL);
      })
      .catch((error) => {
        console.log("Call Made to :- " + URL);
      });
  };

  makeRequest();
  setInterval(makeRequest, 15 * 60 * 1000);
  return <>Calling API :- {URL}</>;
}

export default App;
