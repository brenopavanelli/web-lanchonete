// src/components/Carrinho.jsx

// ⚙️ Altere para o número real do WhatsApp da lanchonete
// Formato: código do país + DDD + número (sem espaços ou símbolos)
const WHATSAPP_NUMBER = "5511999999999";

function formatarMensagem(itens, total) {
  const linhaItens = itens
    .map(
      (item) =>
        `• ${item.quantidade}x ${item.nome} — R$ ${(item.preco * item.quantidade)
          .toFixed(2)
          .replace(".", ",")}`
    )
    .join("\n");

  return (
    `🛒 *Novo Pedido*\n\n` +
    `${linhaItens}\n\n` +
    `━━━━━━━━━━━━━━\n` +
    `*Total: R$ ${total.toFixed(2).replace(".", ",")}*\n\n` +
    `Por favor, confirme meu pedido! 😊`
  );
}

export default function Carrinho({ itens, onFechar, onAdicionar, onRemover, onLimpar }) {
  const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  const totalItens = itens.reduce((acc, item) => acc + item.quantidade, 0);

  function enviarWhatsApp() {
    if (itens.length === 0) return;
    const mensagem = formatarMensagem(itens, total);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={onFechar}
      />

      {/* Painel lateral */}
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-salgado-light z-50 shadow-2xl flex flex-col bounce-in">

        {/* Topo */}
        <div className="bg-salgado-dark px-5 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-display font-bold text-brand-300 text-xl">
              🛒 Seu Carrinho
            </h2>
            {totalItens > 0 && (
              <p className="text-brand-500 text-xs font-body">
                {totalItens} {totalItens === 1 ? "item" : "itens"}
              </p>
            )}
          </div>
          <button
            onClick={onFechar}
            className="text-brand-400 hover:text-white text-2xl transition-colors leading-none"
          >
            ✕
          </button>
        </div>

        {/* Lista de itens */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {itens.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-3 text-gray-400 py-16">
              <span className="text-6xl">🧺</span>
              <p className="font-body font-semibold text-lg">Carrinho vazio</p>
              <p className="font-body text-sm">Adicione salgados deliciosos!</p>
            </div>
          ) : (
            itens.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-salgado-warm p-3 flex items-center gap-3 shadow-sm"
              >
                <img
                  src={item.imageUrl}
                  alt={item.nome}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-salgado-dark text-sm leading-tight truncate">
                    {item.nome}
                  </p>
                  <p className="font-body text-salgado-deep font-semibold text-sm">
                    R$ {(item.preco * item.quantidade).toFixed(2).replace(".", ",")}
                  </p>
                </div>
                {/* Controle quantidade */}
                <div className="flex items-center gap-1.5 bg-salgado-warm rounded-full px-1.5 py-1">
                  <button
                    onClick={() => onRemover(item.id)}
                    className="w-6 h-6 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full flex items-center justify-center text-sm transition-all active:scale-90"
                  >
                    −
                  </button>
                  <span className="font-display font-bold text-salgado-dark w-4 text-center text-sm">
                    {item.quantidade}
                  </span>
                  <button
                    onClick={() => onAdicionar(item)}
                    className="w-6 h-6 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-full flex items-center justify-center text-sm transition-all active:scale-90"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé */}
        {itens.length > 0 && (
          <div className="border-t border-salgado-warm px-5 py-4 bg-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-body font-semibold text-gray-500">Total</span>
              <span className="font-display font-bold text-salgado-dark text-2xl">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <button
              onClick={enviarWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 active:scale-95 transition-all text-white font-body font-bold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md text-base"
            >
              <span className="text-xl">💬</span>
              Enviar pedido pelo WhatsApp
            </button>

            <button
              onClick={onLimpar}
              className="w-full text-center text-sm text-gray-400 hover:text-red-500 font-body transition-colors py-1"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </div>
    </>
  );
}