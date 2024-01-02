import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./scss/main.scss";
import ShareLayout from "./final/ShareLayout";
import Home from "./final/Home";
import About from "./final/About";
import Portfolio from "./final/Project";
import Contact from "./final/Contact";

export default function App() {
   return(
       <BrowserRouter>
           <Routes>
                <Route path="/" element={<ShareLayout />}>
                    <Route index path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Route>
           </Routes>
       </BrowserRouter>
   )
}

        