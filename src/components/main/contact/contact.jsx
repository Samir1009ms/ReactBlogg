import { Div } from "./contact-container";
import { Button } from "../home/button"

let photo = [{ id: 0, src: require("../../img/control.svg").default }];
export function Contact() {
  let classlar = ["lists", "listtext", "list", "name", "contact-text"];

  return (
    <main className="contact">
      <section className="contact-container">
        <div className="contact-left">
          <img src={photo[0].src} alt="" />
        </div>
        <div className="contact-right">
          <Div classl={classlar} class="contact-right-cont">
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
          <Button class="contact-btn"></Button>
        </div>
      </section>
    </main>
  );
}
