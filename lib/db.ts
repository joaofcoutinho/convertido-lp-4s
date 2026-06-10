import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let _sql: NeonQueryFunction<false, false> | null = null;

/**
 * Retorna o client SQL do Neon, criado de forma lazy (apenas no primeiro uso,
 * em tempo de requisição). Não lança erro na importação do módulo — isso evita
 * que o build da Vercel falhe ao coletar dados das páginas/rotas.
 */
export function getSql(): NeonQueryFunction<false, false> {
  if (!_sql) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL não definido. Configure a variável de ambiente.");
    }
    _sql = neon(url);
  }
  return _sql;
}
