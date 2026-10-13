# Suporte Técnico Planaltina

Landing page de Salatiel Barros, técnico de informática em Planaltina-GO.

## Para quem serve

- **Clientes:** pessoas e pequenos negócios que precisam de suporte de informática, com atendimento presencial em Goiás e no Entorno do DF e remoto para todo o Brasil.
- **Profissionais autônomos:** a página também serve de exemplo para um futuro serviço de criação de páginas para outros profissionais.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura semântica da página |
| CSS3 | Layout responsivo (mobile-first), variáveis CSS e nomenclatura BEM |
| JavaScript (ES Modules) | Animação ao rolar e botão flutuante do WhatsApp, sem bibliotecas |
| Schema.org (JSON-LD) | Dados estruturados do negócio para mecanismos de busca |
| Open Graph | Prévia do link em redes sociais e no WhatsApp |
| Google Fonts | Fonte Plus Jakarta Sans |

Sem frameworks, dependências ou etapa de build. A página funciona sem JavaScript; ele só adiciona os efeitos.

## Estrutura

```
.
├── index.html                 Conteúdo da página
├── assets/
│   ├── css/
│   │   ├── base.css           Variáveis, reset e tipografia
│   │   ├── layout.css         Container e seções
│   │   ├── components.css     Botões, cartões e demais componentes
│   │   └── responsive.css     Breakpoints, movimento reduzido e impressão
│   ├── js/
│   │   ├── main.js            Ponto de entrada
│   │   ├── config.js          Seletores e parâmetros
│   │   └── modules/           Animação ao rolar, botão flutuante e checagem do navegador
│   └── img/                   Foto e QR Code
├── CLAUDE.md                  Instruções para o assistente de código
└── .gitignore
```

## Licença

© 2026 Salatiel Barros. Todos os direitos reservados. O código, os textos e as imagens não podem ser copiados ou reutilizados sem autorização.
