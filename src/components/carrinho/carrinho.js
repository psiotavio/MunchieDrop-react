import './carrinho.scss';

let carrinho = []; // Array para armazenar os itens do carrinho
let cartModalOpen = false;
function abrirModalCarrinho() {
  cartModalOpen = true;
}
function fecharModalCarrinho() {
  cartModalOpen = false;
}




// Função para adicionar um item ao carrinho
function adicionarItemAoCarrinho(item) {
  carrinho.push(item); // Adiciona o item ao array do carrinho
}


const btnCarrinho = document.getElementById('cart-btn'); // Substitua pelo ID do botão do carrinho

btnCarrinho.addEventListener('click', () => {
  // Lógica para abrir o modal do carrinho
  // Aqui você pode usar a função ou biblioteca que preferir para exibir o modal
  // Certifique-se de exibir os itens do carrinho no modal
});



