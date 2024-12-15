import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Project from "../pages/project";
import Saved from "../pages/saved";
import Shared from "../pages/shared";
import Achievment from "../pages/achievment";

const Portfolio = () => {
  return (
    <div className="flex flex-col w-full bg-[#F5F5F5] h-screen">
      <Header />
      <div className="flex flex-col mt-8 ml-8 mb-11 mr-11 bg-white rounded-lg h-full px-6 pt-6">
      <h1 className="text-2xl font-[roboto] font-semibold">Portfolio</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/project" />} />
          <Route path="/project" element={<Project />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/achievment" element={<Achievment />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
};

export default Portfolio;