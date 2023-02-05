import { Container } from "./main-container";
import {Button} from "./button"
import { Img } from "../about/img";
import { MainImgs } from "../about/photos"; 
export function Main() {
  let Mainimg=MainImgs
  return (
    <main className="main">
     <section className="main-container">
     <Container class="main-container-top">
        Hey there 👋 <br /> I am Amirhossein
      </Container>
      <Container class="main-container-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Container>
    <Button class="main-container-btn" />
    <Img class="main-img" img={Mainimg}></Img>
     </section> 
    </main>
  );
}
