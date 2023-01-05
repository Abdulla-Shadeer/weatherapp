//import logo from './logo.svg';
import Home from "./components/Home/Home.js";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/Login/Login.js";
import Loader from "./components/Loader/Loader.js";

import "./App.css";

function App() {
  const { isAuthenticated, error, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  } else if (error) {
    console.log(error);
  } else if (isAuthenticated) {
    return <Home />;
  } else {
    return <Login />;
  }
}

export default App;
