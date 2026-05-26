import { useCarrinho } from "../contexts/CarrinhoContext";
import Header from "../components/Header";
import Carrinho from "../components/Carrinho";
import Footer from "../components/Footer";

export default function PaginaQuemSomos() {
  const {
    carrinho,
    carrinhoAberto,
    setCarrinhoAberto,
    adicionarAoCarrinho,
    removerDoCarrinho,
    limparCarrinho,
    totalItens,
  } = useCarrinho();

  return (
    <div className="min-h-screen bg-salgado-light flex flex-col">
      <Header
        totalItens={totalItens}
        onAbrirCarrinho={() => setCarrinhoAberto(true)}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">
        <p>Quem Somos — em construção</p>
      </main>

      {carrinhoAberto && (
        <Carrinho
          itens={carrinho}
          onFechar={() => setCarrinhoAberto(false)}
          onAdicionar={adicionarAoCarrinho}
          onRemover={removerDoCarrinho}
          onLimpar={limparCarrinho}
        />
      )}

      <Footer />
    </div>
  );
}