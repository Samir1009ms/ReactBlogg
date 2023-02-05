import { Text } from "./footer-Container";
import style from "./design/style.module.css"

export function Footer() {
  return (
    <footer className={style.footer}>
      <Text class="footerText">Copyright © 2021 All rights reserved.</Text>
      <Text class="icons">Copyright © 2021 All rights reserved.</Text>
      <Text class="footerText">Source code available</Text>
    </footer>
  );
}
