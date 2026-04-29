// src/components/CardProduto.jsx

export default function CardProduto({ produto, quantidadeNoCarrinho, onAdicionar, onRemover }) {
  const { nome, descricao, preco, imageUrl, disponivel } = produto;

  return (
    <div
      className={`card-animate bg-white rounded-2xl shadow-sm border border-salgado-warm overflow-hidden flex flex-col transition-shadow hover:shadow-md ${
        !disponivel ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {/* Imagem */}
      <div className="relative w-full h-40 overflow-hidden bg-salgado-warm">
        <img
          src={imageUrl}
          alt={nome}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {!disponivel && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-body font-bold text-sm bg-black/60 px-3 py-1 rounded-full">
              Indisponível
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="font-display font-bold text-salgado-dark text-lg leading-tight">
          {nome}
        </h3>
        <p className="font-body text-sm text-gray-500 flex-1 leading-snug">
          {descricao}
        </p>

        {/* Preço + Controle */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-display font-bold text-salgado-deep text-xl">
            R$ {preco.toFixed(2).replace(".", ",")}
          </span>

          {/* Controle de quantidade */}
          {quantidadeNoCarrinho === 0 ? (
            <button
              onClick={() => onAdicionar(produto)}
              className="bg-brand-500 hover:bg-brand-600 active:scale-95 transition-all text-white font-body font-bold text-sm px-4 py-2 rounded-full shadow"
            >
              Adicionar
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-salgado-warm rounded-full px-2 py-1">
              <button
                onClick={() => onRemover(produto.id)}
                className="w-7 h-7 bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold rounded-full flex items-center justify-center transition-all"
              >
                −
              </button>
              <span className="font-display font-bold text-salgado-dark w-5 text-center">
                {quantidadeNoCarrinho}
              </span>
              <button
                onClick={() => onAdicionar(produto)}
                className="w-7 h-7 bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold rounded-full flex items-center justify-center transition-all"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}