import { Text } from "./footer-Container";
import style from "./design/style.module.css"
import { Icon } from "./footer-icon";

export function Footer() {
  return (
    <footer className={style.footer}>
      <Text class="footerText">Copyright © 2021 All rights reserved.</Text>
      <Icon class="icons" />
      <Text class="footerText">Source code available</Text>
    </footer>
  );
}
