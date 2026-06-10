"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao enviar.");
      setStatus("success");
      setForm({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar.");
    }
  };

  if (status === "success") {
    return (
      <div className="cta-form cta-form-success" role="status">
        <div className="cta-success-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3>Recebemos seu contato!</h3>
        <p>Nosso time vai falar com você em breve. Obrigado pelo interesse na Convertido.</p>
        <button type="button" className="btn-outline" onClick={() => setStatus("idle")}>
          Enviar outro contato
        </button>
      </div>
    );
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <div className="cta-field">
        <label htmlFor="nome">Nome</label>
        <input id="nome" type="text" placeholder="Seu nome" value={form.nome} onChange={update("nome")} required />
      </div>
      <div className="cta-field">
        <label htmlFor="empresa">Empresa</label>
        <input id="empresa" type="text" placeholder="Nome da empresa" value={form.empresa} onChange={update("empresa")} required />
      </div>
      <div className="cta-field">
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" placeholder="voce@empresa.com.br" value={form.email} onChange={update("email")} required />
      </div>
      <div className="cta-field">
        <label htmlFor="telefone">Telefone / WhatsApp</label>
        <input id="telefone" type="tel" placeholder="(00) 00000-0000" value={form.telefone} onChange={update("telefone")} required />
      </div>
      <div className="cta-field">
        <label htmlFor="mensagem">Mensagem (opcional)</label>
        <textarea id="mensagem" rows={3} placeholder="Conte um pouco sobre sua operação" value={form.mensagem} onChange={update("mensagem")} />
      </div>
      {status === "error" && <p className="cta-form-error">{errorMsg}</p>}
      <button type="submit" className="btn-primary cta-form-submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando…" : <>Quero meu planejamento estratégico &rarr;</>}
      </button>
    </form>
  );
}
