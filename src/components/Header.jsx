// src/components/Header.jsx
import { useState } from "react";

export default function Header({ totalItens, totalPreco, onAbrirCarrinho }) {
  const [badgeAnimado, setBadgeAnimado] = useState(false);

  // chamado pelo pai quando totalItens muda
  // usamos key trick no badge para reativar animação
  return (
    <header className="sticky top-0 z-50 bg-salgado-dark shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo / Nome */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🥐</span>
          <div>
            <h1 className="font-display font-bold text-brand-300 text-xl leading-none">
              Lanchonete
            </h1>
            <p className="text-brand-500 text-xs font-body">
              Salgados & Lanches
            </p>
          </div>
        </div>

        {/* Botão Carrinho */}
        <button
          onClick={onAbrirCarrinho}
          className="relative flex items-center gap-2 bg-brand-500 hover:bg-brand-400 active:scale-95 transition-all duration-150 text-white font-body font-bold px-4 py-2 rounded-full shadow-md"
        >
          <span className="text-lg">🛒</span>
          <span className="hidden sm:inline text-sm">Carrinho</span>

          {totalItens > 0 && (
            <span
              key={totalItens} // re-monta para reanimaçao
              className="bounce-in absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            >
              {totalItens > 9 ? "9+" : totalItens}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}