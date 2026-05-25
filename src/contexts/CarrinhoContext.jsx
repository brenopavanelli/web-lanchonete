/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  function adicionarAoCarrinho(produto) {
    setCarrinho((prev) => {
      const existe = prev.find((i) => i.id === produto.id);
      if (existe) {
        return prev.map((i) =>
          i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }

  function removerDoCarrinho(id) {
    setCarrinho((prev) => {
      const item = prev.find((i) => i.id === id);
      if (!item) return prev;
      if (item.quantidade === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) =>
        i.id === id ? { ...i, quantidade: i.quantidade - 1 } : i
      );
    });
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const totalItens = carrinho.reduce((acc, i) => acc + i.quantidade, 0);

  return (
    <CarrinhoContext.Provider value={{
      carrinho,
      carrinhoAberto,
      setCarrinhoAberto,
      adicionarAoCarrinho,
      removerDoCarrinho,
      limparCarrinho,
      totalItens,
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}