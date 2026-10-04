# Moto: manutenção (API + app)

```
moto-projeto/
├── api/                      (servidor Node + PostgreSQL)
│   ├── sql/schema.sql        (script do banco para o pgAdmin)
│   ├── .env.example          (copie para .env e preencha)
│   └── src/
│       ├── config/           conexão com o banco
│       ├── repositories/     acesso ao banco (SQL)
│       ├── services/         regras de negócio
│       ├── controllers/      recebem e respondem as requisições
│       ├── routes/           rotas
│       └── utils/
└── mobile-arquivos/          (copiar para o projeto Expo)
    ├── App.js
    └── src/
        ├── config/           endereço da API
        ├── repositories/     chamadas à API
        ├── services/         km automático, notificações
        ├── hooks/            estado da tela (useMoto)
        ├── components/       peças visuais
        ├── screens/          tela principal
        ├── theme/  utils/
```

Passo a passo: veja a explicação no chat (instalar Node, VS Code, criar o banco, rodar a API, criar o projeto Expo, copiar os arquivos, ajustar o IP e rodar).
