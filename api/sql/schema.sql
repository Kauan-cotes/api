CREATE TABLE IF NOT EXISTS config (
  chave TEXT PRIMARY KEY,
  valor TEXT
);

CREATE TABLE IF NOT EXISTS media_dia (
  dia INTEGER PRIMARY KEY,          -- 0=Dom ... 6=Sáb
  km  NUMERIC NOT NULL
);

CREATE TABLE IF NOT EXISTS itens (
  id      SERIAL PRIMARY KEY,
  nome    TEXT NOT NULL,
  km_alvo NUMERIC NOT NULL,         -- km absoluto da troca
  repetir NUMERIC NOT NULL DEFAULT 0,
  avisado BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO media_dia (dia, km) VALUES
  (0,10),(1,30),(2,34),(3,28),(4,32),(5,36),(6,15)
ON CONFLICT (dia) DO NOTHING;

INSERT INTO config (chave, valor) VALUES
  ('km', '63100'),
  ('base', to_char(CURRENT_DATE, 'YYYY-MM-DD'))
ON CONFLICT (chave) DO NOTHING;
