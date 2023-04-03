import { JourneyContLeft } from "./journey-container";
import { JourneyContRight } from "./journey-container";
import style from "./design/style.module.css"
import { useEffect } from "react";


export function Journey({listTexts}) {
  const tt="Journey"
  useEffect(() => {
    listTexts(tt)
  },[]);
  return (
    <main className={style.journey}>
      <section className={style.journeyContainer}>
      <JourneyContLeft></JourneyContLeft>
      
      <JourneyContRight></JourneyContRight>

      </section>
    </main>
  );
}
