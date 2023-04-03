import style from "./design/style.module.css"
import { useEffect } from "react";

import { Porto } from "./portfolios-container";
import { Lists } from "./portocont";
export function Portfolios({listTexts}) {
  let lists = Lists;
  const tt="Portofolios"
  useEffect(() => {
    listTexts(tt)
  },[]);
  return (
    <main className={style.port}>
        <section className={style.porto}>
      <Porto list={lists}></Porto>
    </section>
    </main>
  );
}
