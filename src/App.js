import { Home } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Introduction from "./Components/Pages/Intro/introduction";
import PlaytoEarn from "./Components/Pages/Intro/introduction";

import MainNavbar from "./Components/Pages/MainNavbar";
import TopHeader from "./Components/Pages/TopHeader";


function App() {
  return (
    <>
      <TopHeader />
      <MainNavbar />

      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/intro" element={<Introduction />} />
      </Routes>
   
    </>
  );
}

export default App;
