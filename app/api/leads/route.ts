import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadBody = {
  nome?: string;
  empresa?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const nome = body.nome?.trim() ?? "";
  const empresa = body.empresa?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const telefone = body.telefone?.trim() ?? "";
  const mensagem = body.mensagem?.trim() || null;

  if (!nome || !empresa || !email || !telefone) {
    return NextResponse.json(
      { error: "Preencha nome, empresa, e-mail e telefone." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  try {
    const rows = await sql`
      INSERT INTO leads (nome, empresa, email, telefone, mensagem)
      VALUES (${nome}, ${empresa}, ${email}, ${telefone}, ${mensagem})
      RETURNING id
    `;
    return NextResponse.json({ ok: true, id: rows[0].id }, { status: 201 });
  } catch (err) {
    console.error("Erro ao salvar lead:", err);
    return NextResponse.json(
      { error: "Não foi possível salvar agora. Tente novamente." },
      { status: 500 }
    );
  }
}
