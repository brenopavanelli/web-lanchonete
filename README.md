# 🥐 Rei do Salgado — Sistema de Pedidos Online

> Cardápio digital com carrinho de compras e envio de pedidos via WhatsApp.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-CDN-38BDF8?logo=tailwindcss)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)

---

## 📋 Sobre o Projeto

O **Rei do Salgado** é um sistema web de pedidos desenvolvido como projeto acadêmico para a disciplina de Desenvolvimento Web. A aplicação simula o cardápio digital de uma lanchonete brasileira, permitindo que o cliente monte seu pedido, informe dados de entrega e envie o pedido diretamente para o WhatsApp do estabelecimento.

### Funcionalidades

- Vitrine de produtos com filtro por categoria e busca por nome
- Carrinho de compras com controle de quantidade por item
- Seleção entre retirada no local ou entrega com cálculo de frete
- Formulário de endereço de entrega com validação de campos
- Seleção de forma de pagamento (Pix, Débito, Crédito, Dinheiro)
- Campo de observações livres
- Geração automática de mensagem formatada para WhatsApp
- Layout responsivo para desktop e dispositivos móveis

---

## 🎨 Layout

O projeto utiliza uma identidade visual quente e acolhedora, com paleta de cores terrosas e douradas que remetem à tradição das lanchonetes brasileiras.

| Cor | Token | Hex |
|-----|-------|-----|
| Dourado principal | `brand-500` | `#f59e0b` |
| Âmbar escuro | `brand-600` | `#d97706` |
| Marrom terroso | `salgado-deep` | `#c47a2b` |
| Marrom profundo | `salgado-dark` | `#7c4a1e` |
| Creme claro | `salgado-light` | `#fdf6ec` |

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|-----------|-----|
| [React 18](https://react.dev/) | Biblioteca principal de UI |
| [Vite 5](https://vitejs.dev/) | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização via CDN |
| [Google Fonts](https://fonts.google.com/) | Fontes Baloo 2 e Nunito |
| [Vercel](https://vercel.com/) | Plataforma de deploy |

---

## 📁 Estrutura do Projeto

```
rei-do-salgado/
├── public/
│   ├── favicon/
│   └── images/
│       ├── logos/
│       │   ├── rei-do-salgado.png
│       │   └── rei-do-salgado-horizontal.png
│       └── produtos/
│           ├── coxinha-de-frango.jpg
│           └── ...
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CardProduto.jsx
│   │   ├── Carrinho.jsx
│   │   └── Footer.jsx
│   ├── containers/
│   ├── data/
│   │   └── produtos.js
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── .env
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm versão 9 ou superior

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/rei-do-salgado.git

# Acesse a pasta do projeto
cd rei-do-salgado

# Instale as dependências
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```bash
cp .env.example .env
```

Preencha as variáveis:

```env
VITE_WHATSAPP_NUMBER=5511999999999
```

> ⚠️ Nunca suba o arquivo `.env` para o repositório. Ele já está listado no `.gitignore`.

### Executando

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

---

## 📦 Build e Deploy

```bash
# Gera a build de produção
npm run build

# Visualiza a build localmente antes de subir
npm run preview
```

O projeto está configurado para deploy automático na **Vercel**. Cada push na branch `main` gera um novo deploy em produção. Branches de feature geram URLs de preview automáticas.

> ⚠️ Lembre-se de cadastrar a variável `VITE_WHATSAPP_NUMBER` no painel da Vercel em **Settings → Environment Variables** e realizar um redeploy após o cadastro.

---

## 🔧 Como Adicionar Produtos

Edite o arquivo `src/data/produtos.js` seguindo o modelo:

```js
{
  id: 11,
  nome: "Nome do Produto",
  descricao: "Descrição curta e apetitosa do produto.",
  preco: 7.50,
  categoria: "Salgados Fritos", // deve existir em `categorias`
  imageUrl: "/images/produtos/nome-do-produto.jpg",
  disponivel: true,
}
```

As imagens devem ser salvas em `public/images/produtos/` no formato **JPG** ou **WebP**, com dimensões de **400x300px**.

---

## 📱 Exemplo de Mensagem Gerada

```
🛒 *Novo Pedido*

• 2x Coxinha de Frango — R$ 12,00
• 1x Pão de Queijo — R$ 4,50

━━━━━━━━━━━━━━
🧾 Subtotal: R$ 16,50
🚚 Frete: R$ 9,90
*Total: R$ 26,40*

📝 *Observações:* Sem catupiry na coxinha, por favor.

📍 *Endereço de Entrega*
CEP: 14870-000
Rua: Rua das Flores, nº 42
Bairro: Centro

💰 *Forma de Pagamento:* Pix

Por favor, confirme meu pedido! 😊
```

---

## 👨‍💻 Autor

Desenvolvido por **Breno Pavanelli dos Santos**

[![GitHub](https://img.shields.io/badge/GitHub-seu--usuario-181717?logo=github)](https://github.com/seu-usuario)

---

## 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos**. Todos os direitos reservados.