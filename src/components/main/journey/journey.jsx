import { JourneyContLeft } from "./journey-container";
import { JourneyContRight } from "./journey-container";
import style from "./design/style.module.css"

export function Journey() {
  return (
    <main className={style.journey}>
      <section className={style.journeyContainer}>
      <JourneyContLeft></JourneyContLeft>
      
      <JourneyContRight></JourneyContRight>

      </section>
    </main>
  );
}
