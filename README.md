# Website de Pedidos Online para Lanchonete

Sistema web mobile-first para digitalizar o atendimento inicial de uma lanchonete, permitindo que o cliente monte seu pedido no site e o envie de forma estruturada diretamente para o WhatsApp do estabelecimento.

> Projeto focado em resolver um problema real de operação: reduzir o gargalo do atendimento manual, organizar melhor os pedidos e melhorar a experiência do cliente sem depender de marketplaces de terceiros.

---

## Visão Geral

Muitas lanchonetes ainda recebem pedidos de forma manual por WhatsApp, o que gera demora no atendimento, retrabalho, erros de anotação e dificuldade para escalar em horários de pico.

Este projeto propõe uma solução enxuta e funcional:

- o cliente acessa o cardápio online
- seleciona produtos e adicionais
- monta o carrinho
- informa endereço e forma de pagamento
- finaliza o pedido
- o sistema gera automaticamente uma mensagem padronizada
- o cliente é redirecionado para o WhatsApp da lanchonete com o pedido pronto para envio

A proposta preserva a operação simples do WhatsApp, mas remove a etapa mais repetitiva e sujeita a erros: a coleta manual do pedido.

---

## Objetivo do Projeto

Desenvolver uma plataforma web de autoatendimento para lanchonete com foco em:

- agilidade no processo de pedido
- usabilidade mobile-first
- clareza na comunicação com a operação
- facilidade de manutenção
- autonomia da loja sobre cardápio, preços e disponibilidade

---

## Problema Resolvido

Antes da solução:

- cardápio enviado manualmente por mensagem
- necessidade de várias trocas de texto para montar um pedido
- risco de erro em observações, adicionais e valores
- lentidão no horário de pico
- perda de vendas por demora no atendimento
- dependência de atendimento humano logo no primeiro contato

Depois da solução:

- pedido estruturado e padronizado
- menor atrito para o cliente
- menos retrabalho para a lanchonete
- redução de erros operacionais
- maior velocidade no atendimento inicial
- experiência mais profissional e escalável

---

## Principais Funcionalidades

### Área do cliente
- Visualização do catálogo de produtos
- Exibição por categorias
- Página/modal de detalhes do produto
- Seleção de adicionais
- Campo de observações por item
- Carrinho de compras com atualização de subtotal
- Formulário de checkout
- Cálculo de taxa de entrega por bairro
- Seleção de forma de pagamento
- Campo de troco quando necessário
- Geração da mensagem final do pedido
- Redirecionamento automático para o WhatsApp

### Área administrativa
- Login administrativo
- Cadastro, edição e exclusão de categorias
- Cadastro, edição, pausa e exclusão de produtos
- Cadastro e edição de adicionais
- Cadastro e edição de taxas de entrega
- Configuração de informações da loja
- Controle básico do cardápio e da operação

---

## Diferenciais do Projeto

- **Foco em problema real de negócio**: não é apenas um CRUD, mas uma solução para gargalo operacional
- **Integração prática com WhatsApp**: sem depender de fluxo complexo para a operação
- **Mobile-first**: pensado para o canal onde o pedido realmente acontece
- **Back-end validando preços e totais**: evita confiar apenas na interface
- **Painel administrativo funcional**: dá autonomia para a lanchonete manter o sistema
- **Escopo realista e orientado à entrega**: prioriza funcionalidade e manutenção

---

## Stack do Projeto

### Front-end
- HTML5
- CSS3
- JavaScript
- Bootstrap

### Back-end
- Node.js
- Express.js

### Persistência de dados
- SQLite

### Integração
- WhatsApp Click-to-Chat

### Ferramentas e apoio
- Git
- GitHub
- VS Code
- Figma / Canva para apoio visual e identidade

---

## Arquitetura Geral

```text
Cliente
  ↓
Interface Web (catálogo, carrinho, checkout)
  ↓
Back-end (regras de negócio, validações, cálculo de totais)
  ↓
Banco de Dados (produtos, categorias, adicionais, taxas, configurações)
  ↓
Geração da mensagem estruturada
  ↓
Redirecionamento para WhatsApp da lanchonete
```
## Fluxo do Usuário

1. O cliente acessa o site da lanchonete.
2. Visualiza o cardápio por categorias.
3. Escolhe um produto.
4. Personaliza com adicionais e observações.
5. Adiciona ao carrinho.
6. Informa endereço, bairro e forma de pagamento.
7. O sistema calcula subtotal, taxa e total final.
8. O back-end valida os dados do pedido.
9. O sistema gera a mensagem formatada.
10. O cliente é redirecionado ao WhatsApp com o pedido pronto.

## Estrutura de Dados Principal

Entidades previstas no projeto:

- `admins`
- `categorias`
- `produtos`
- `adicionais`
- `produto_adicionais`
- `taxas_entrega`
- `configuracoes_loja`

## Regras de Negócio Relevantes

- O valor total do pedido não deve depender apenas do front-end.
- A taxa de entrega deve variar conforme o bairro informado.
- Produtos pausados não devem ficar disponíveis para novos pedidos.
- O sistema deve respeitar o status de funcionamento da loja.
- Pagamento em dinheiro pode exigir cálculo de troco.
- A mensagem enviada ao WhatsApp deve ser clara, legível e padronizada.

## Segurança e Qualidade

Este projeto considera boas práticas importantes mesmo em um sistema enxuto:

- validação de dados no back-end
- proteção da área administrativa por autenticação
- separação entre interface, regras de negócio e persistência
- estrutura organizada para manutenção futura
- atenção à compatibilidade entre navegadores
- foco em experiência consistente em dispositivos móveis

## Responsividade

O sistema foi pensado com abordagem **mobile-first**, pois o principal canal de acesso do cliente tende a ser o smartphone.

Pontos de atenção do projeto:

- navegação rápida em telas pequenas
- botões acessíveis ao toque
- formulário simples e claro
- fluxo enxuto de checkout
- leitura fácil do catálogo e do carrinho

## Branding e Produto

Além da parte técnica, o projeto inclui a construção da identidade básica da lanchonete para aplicação no ambiente digital:

- definição visual da marca
- padronização de cores e tipografia
- aplicação da identidade na interface
- preparo de materiais de apoio para divulgação do site

Esse cuidado aproxima o sistema de um produto real, não apenas de uma entrega acadêmica.
