import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import MainProvider from "./context/MainContext";

function App() {
  return (
    <MainProvider>
      <RouterProvider router={router}></RouterProvider>
    </MainProvider>
  );
}

export default App;
