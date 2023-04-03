import { Container } from "./main-container";
import {Button} from "./button"
import { Img } from "./imgcont";

import { MainImgs } from "../about/photos"; 
import style from "./design/style.module.css"
import { useEffect } from "react";
export function Main({listTexts}) {
   const tt="Main"
  useEffect(() => {
    listTexts(tt)
  },[]);


  let Mainimg=MainImgs
  return (
    <main className={style.main}>
     <section className={style.mainContainer}>
     <Container class="mainContainerTop">
        Hey there 👋 <br /> I am Amirhossein
      </Container>
      <Container class="mainContainerText">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Container>
    <Button class="mainContainerBtn" />
    <Img class="mainImg" img={Mainimg}></Img>
     </section> 
    </main>
  );
}
