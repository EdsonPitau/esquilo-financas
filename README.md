# 🐿️ Esquilo Finanças

<p align="center">
  <img src="icons/icon-192x192.png" width="96" height="96" alt="Esquilo Finanças" style="border-radius:22px"/>
</p>

<p align="center">
  <strong>Gestão Financeira Pessoal — PWA Mobile-First</strong><br/>
  Controle suas entradas, gastos fixos e variáveis com um esquilo guardando suas nozes 🌰
</p>

---

## ✨ Funcionalidades

- 💰 **Entradas** — Registre salário, freelances, dividendos e outras receitas
- 🏠 **Gastos Fixos** — Aluguel, internet, streaming e despesas recorrentes
- 🛒 **Gastos Variáveis** — iFood, mercado, farmácia e gastos do dia a dia
- 📊 **Relatório Mensal** — KPIs, comprometimento de renda, análise por categoria
- 📅 **Relatório Anual** — Evolução mês a mês, destaques, taxa de poupança
- 🗓️ **Navegação Temporal** — Troque de mês/ano e veja dados históricos
- 🐿️ **Mascote Dinâmico** — O Esquilo reflete sua saúde financeira em 4 estados
- 📱 **PWA Instalável** — Funciona como app nativo em Android e iOS
- 📴 **Offline First** — Funciona sem internet via Service Worker + localStorage

---

## 📱 Como Instalar no Celular

### Android (Chrome)
1. Acesse o app no Chrome
2. Toque nos **⋮ três pontos** no canto superior direito
3. Selecione **"Adicionar à tela inicial"**
4. Confirme — o ícone aparece como um app nativo

### iOS (Safari)
1. Acesse o app no Safari
2. Toque no botão **Compartilhar** (quadrado com seta para cima)
3. Role e toque em **"Adicionar à Tela de Início"**
4. Confirme o nome e toque em **Adicionar**

---

## 🚀 Como Hospedar (GitHub Pages)

```bash
# 1. Clone ou faça fork deste repositório
git clone https://github.com/SEU_USUARIO/esquilo-financas.git
cd esquilo-financas

# 2. Push para o GitHub
git add .
git commit -m "🐿️ Initial commit — Esquilo Finanças PWA"
git push origin main

# 3. Ative o GitHub Pages
# Repositório → Settings → Pages → Source: main branch / root
# Seu app estará em: https://SEU_USUARIO.github.io/esquilo-financas/
```

> **Importante:** Para o Service Worker funcionar corretamente, o app precisa ser servido via **HTTPS**. O GitHub Pages fornece HTTPS gratuitamente.

---

## 🎨 Tecnologias

| Tech | Uso |
|---|---|
| HTML5 + CSS3 | Estrutura e estilos |
| JavaScript ES6+ | Lógica e interatividade |
| Tailwind CSS (CDN) | Utilitários de estilo |
| Chart.js (CDN) | Gráficos de rosca e barras |
| Web App Manifest | Instalação como PWA |
| Service Worker | Cache offline |
| localStorage | Persistência segmentada por mês/ano |

---

## 🐿️ Estados do Mascote

| Estado | Condição | Visual |
|---|---|---|
| 😎 **Feliz** | Saldo > 10% da renda | Esquilo com óculos e bolota dourada |
| 😰 **Preocupado** | Saldo entre 0% e 10% | Esquilo suando roendo a bolota |
| 😢 **Triste** | Saldo negativo | Esquilo com lágrimas e bolota vazia |
| 😐 **Neutro** | Sem dados | Esquilo sereno esperando |

---

## 📂 Estrutura do Projeto

```
esquilo-financas/
├── index.html          # App completo (HTML + CSS + JS)
├── manifest.json       # PWA Manifest
├── sw.js               # Service Worker (offline)
├── README.md           # Documentação
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    ├── icon-512x512.png
    ├── apple-touch-icon.png
    ├── favicon-16x16.png
    └── favicon-32x32.png
```

---

## 📄 Licença

MIT © Esquilo Finanças
