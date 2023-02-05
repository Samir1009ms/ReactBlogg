import { Porto } from "./portfolios-container";
import { Lists } from "./portocont";
export function Portfolios() {
  let lists = Lists;
  return (
    <main className="port">
        <section className="porto">
      <Porto list={lists}></Porto>
    </section>
    </main>
  );
}
