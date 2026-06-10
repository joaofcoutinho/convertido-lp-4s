"use client";

import { useEffect, useRef } from "react";

const INLINE = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1713440",hash:"89558e68482ecb0e6d08e80d5d05076a",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

const SCRIPT_ID = "amoforms_script_1713440";
const SCRIPT_SRC = "https://forms.kommo.com/forms/assets/js/amoforms.js?1781117624";

export default function KommoForm() {
  const ref = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !ref.current) return;
    loaded.current = true;

    // Script de inicialização (define a config do formulário)
    const init = document.createElement("script");
    init.text = INLINE;
    ref.current.appendChild(init);

    // Script do amoforms que renderiza o formulário (evita duplicar)
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.async = true;
      s.charset = "utf-8";
      s.src = SCRIPT_SRC;
      ref.current.appendChild(s);
    }
  }, []);

  return <div ref={ref} className="kommo-form" />;
}
