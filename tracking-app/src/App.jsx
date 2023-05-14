import { useState } from "react";

//components
import MainNav from "./shared/components/Navbar/MainNav";
import LandingPage from "./user/pages/LandingPage/LandingPage";

function App() {
  return (
    <>
      <MainNav />
      <LandingPage />
    </>
  );
}

export default App;
