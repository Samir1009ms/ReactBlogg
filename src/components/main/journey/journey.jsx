import { JourneyContLeft } from "./journey-container";
import { JourneyContRight } from "./journey-container";
export function Journey() {
  return (
    <main className="journey">
      <section className="journey-container">
      <JourneyContLeft></JourneyContLeft>
      
      <JourneyContRight></JourneyContRight>

      </section>
    </main>
  );
}
