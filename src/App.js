import "./App.css";
import React, { useEffect, useContext } from "react";
import { RouterApp } from "./src/infrastructure/navigation/router";
import { UserContextProvider } from "./src/services/user.contex";

function App() {
  return (
    <UserContextProvider>
      <RouterApp />
    </UserContextProvider>
  );
}

export default App;
