import React from "react";
import { Routes, Route } from "react-router-dom";
import All from './pages/All';
// import Navbar from './components/Navbar'
import AsideBar from "./components/AsideBar";
import {TutorialsPage} from './pages/TutorialsPage';
import {CatalogPage} from "./pages/CatalogPage";
import { TemplatesPage } from "./pages/TemplatesPage";
import { RecentPages } from "./pages/RecentPages";
import { InspirationPage } from "./pages/InspirationPage";
import { IntoCoursesPages } from "./pages/IntoCoursesPages";
// import { SecondNav } from "./components/SecondNav";

function App() {
  return (
    <>
      
      <AsideBar/>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path='tutorials' element={<TutorialsPage/>}/>
        <Route path='templates' element={<TemplatesPage/>}/>
        <Route path='courses' element ={<RecentPages/>}/>
        <Route path='intocourse' element ={<IntoCoursesPages/>}/>
        <Route path ='catalog' element={<CatalogPage/>}/>
        <Route path ='Inspiration' element={<InspirationPage/>}/>
      </Routes>
    
    </>
  );
}

export default App;
