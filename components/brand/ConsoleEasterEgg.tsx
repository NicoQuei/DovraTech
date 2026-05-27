"use client";

import { useEffect } from "react";

/** A little hello for anyone who opens the console. The site is the proof. */
export function ConsoleEasterEgg() {
  useEffect(() => {
    const brand = "color:#19E57D;font-weight:bold;font-size:13px";
    const dim = "color:#8B95A7";
    // eslint-disable-next-line no-console
    console.log(
      "%c❯ Dovra%c — engenharia digital sob medida.\n%cCurtiu o código? Provavelmente vamos curtir o seu desafio.\n→ contato@dovratech.com.br",
      brand,
      dim,
      dim,
    );
  }, []);
  return null;
}
