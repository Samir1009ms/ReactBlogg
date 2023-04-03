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
  let [list, setList] = useState();

 function listSelected(list) {
    setList(list);
    // console.log(list);
  }




  return (
    <>
      <BrowserRouter>
        <Header text={list} listClick={listSelected} list={list} />
        <Routes>
          <Route index  element={<Main listTexts={listSelected}></Main>} />
          <Route path="/Main" element={<Main listTexts={listSelected}></Main>} />
          <Route path="/About"  element={<About listTexts={listSelected} ></About>} />
          <Route path="/Contact"  element={<Contact listTexts={listSelected} />} />
          <Route path="/Portfolios" element={<Portfolios listTexts={listSelected} />} />
          <Route path="/Journey" element={<Journey listTexts={listSelected} />} />
          <Route path="/Blog"  element={<Blog listTexts={listSelected} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
