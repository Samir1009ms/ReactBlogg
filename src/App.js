import "./style.css";
import { Header } from "./components/header/header";
import { Main } from "./components/main/home/main";
import { About } from "./components/main/about/about";
import { Contact } from "./components/main/contact/contact";
import { Portfolios } from "./components/main/portofiols/portfolios";
import { Blog } from "./components/main/blog/blog";
import { Journey } from "./components/main/journey/journey";
import { Footer } from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [list, setList] = useState("main");

  function listSelected(list) {
    setList(list);
  }

  return (
    <>
      <BrowserRouter>
        <Header text={list} listClick={listSelected} list={list} />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/Main" index element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolios" element={<Portfolios />} />
          <Route path="/Journey" element={<Journey />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      {/* <Main />
      <About />
      <Contact />
      <Portfolios />
      <Journey />   
      <Blog /> */}
    </>
  );
}

export default App;
