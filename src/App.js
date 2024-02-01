import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Router";

function App() {
  return (
    <div className="App bg-white text-black m-0 p-0">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
