import React from "react";
import Login from "./components/login";
import Profile from "./components/profile";
import { useAuth } from "./providers/auth";

function App() {
  const { user} = useAuth();
  console.log(user);

  return (
    <div className="App">
      <p>Olá mundo</p>
    
      <Profile />
      <Login />
    </div>
  );
}

export default App;
