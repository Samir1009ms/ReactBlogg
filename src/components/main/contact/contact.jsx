import { Div } from "./contact-container";
import { Button } from "./Contactbutton"
import style from "./design/style.module.css"
import { useEffect } from "react";



let photo = [{ id: 0, src: require("../../img/control.svg").default }];
export function Contact({listTexts}) {
  let classlar = ["lists", "listtext", "list", "name", "contactText"];
  const tt="Contact"
  useEffect(() => {
    listTexts(tt)
  },[]);

  return (
    <main className={style.contact}>
      <section className={style.contactContainer}>
        <div className={style.contactLeft}>
          <img src={photo[0].src} alt="" />
        </div>
        <div className={style.contactRight}>
          <Div classl={classlar} class="rightCont">
            {"You can reach me any  time🙂 "}
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            }
            {"Twitter: amirhwsin"}
            {"Github: amireshoon"}
            {"Dribble: amireshoon"}
            {"Telegram: GeekDreamer"}
            {"Email: amirhwsin@outlook.com"}
          </Div>
          <Button class="contactBtn"></Button>
        </div>
      </section>
    </main>
  );
}
