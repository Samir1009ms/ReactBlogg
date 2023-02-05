import style from "./design/style.module.css"

import { Porto } from "./portfolios-container";
import { Lists } from "./portocont";
export function Portfolios() {
  let lists = Lists;
  return (
    <main className={style.port}>
        <section className={style.porto}>
      <Porto list={lists}></Porto>
    </section>
    </main>
  );
}
