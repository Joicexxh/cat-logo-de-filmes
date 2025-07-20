function adicionarFilme() {
  const titulo = document.getElementById("titulo").value;
  const ano = document.getElementById("ano").value;
  const nota = document.getElementById("nota").value;
  const genero = document.getElementById("genero").value;
  const diretor = document.getElementById("diretor").value;

  if (!titulo || !ano || !nota || !genero || !diretor) {
    alert("Preencha todos os campos!");
    return;
  }

  const tabela = document.getElementById("tabelaFilmes").getElementsByTagName("tbody")[0];
  const novaLinha = tabela.insertRow();

  const cartazCell = novaLinha.insertCell(0);
  cartazCell.innerHTML = `
    <img src="https://via.placeholder.com/80x120?text=Filme" alt="${titulo}" onclick="expandirImagem(this)">
  `;

  novaLinha.insertCell(1).textContent = titulo;
  novaLinha.insertCell(2).textContent = ano;
  novaLinha.insertCell(3).textContent = nota;
  novaLinha.insertCell(4).textContent = genero;
  novaLinha.insertCell(5).textContent = diretor;

  const acoesCell = novaLinha.insertCell(6);
  acoesCell.innerHTML = `
    <button onclick="removerLinha(this)">Remover</button>
    <button onclick="destacarLinha(this)">Destacar</button>
  `;

  document.getElementById("titulo").value = "";
  document.getElementById("ano").value = "";
  document.getElementById("nota").value = "";
  document.getElementById("genero").value = "";
  document.getElementById("diretor").value = "";
}

function removerLinha(botao) {
  if (confirm("Tem certeza que deseja remover este filme?")) {
    const linha = botao.parentNode.parentNode;
    linha.remove();
  }
}

function destacarLinha(botao) {
  const linha = botao.parentNode.parentNode;
  linha.classList.toggle("destacado");
}

function alternarEstilo() {
  document.getElementById("tabelaFilmes").classList.toggle("estilo-alternativo");
}

function temaEscuro() {
  document.body.classList.toggle("estilo-alternativo");
}


function expandirImagem(imagem) {
  const modal = document.getElementById("modalImagem");
  const imgExpandida = document.getElementById("imagemExpandida");
  modal.style.display = "block";
  imgExpandida.src = imagem.src;
}

function fecharImagem() {
  document.getElementById("modalImagem").style.display = "none";
}