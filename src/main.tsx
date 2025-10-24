import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirstStepsApp } from "./FirstStepsApp";
/* import { MyAwesomeApp } from "./MyAwesomeApp"; */
import './index.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}
    
  </StrictMode>
);
