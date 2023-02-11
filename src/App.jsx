import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./Home"
import MessagePg from "./MessagePg";

function App(){

  return (
    <Router>
      <Routes>
        <Route
          exact
          path = "/"
          element = {<Home/>}
        />
        <Route
          exact
          path = "/message"
          element = {<MessagePg/>}
        />

      </Routes>
    </Router>
  );
}

export default App;