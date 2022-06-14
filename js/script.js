class Meta {
  constructor() {
    this.arrayMetas = [];
    this.id = 1;
    this.rows = 0;
  }

  salvar() {
    let meta = this.lerDados();
    if (this.validaCampo(meta) == true) {
      this.adicionar(meta);
    }
    this.listaTabela();
  }

  adicionar(meta) {
    let msg =
      "Tabela Cheia, remova um item primeiro para adicionar o próximo! Quantidade de linhas na tabela: " +
      this.rows;
    if (this.rows < 19) {
      //Opcional: Definindo a quantidade de linhas na tabela
      this.arrayMetas.push(meta);
      this.id++;
      this.rows++;
    } else {
      alert(msg);
    }
  }

  lerDados() {
    let meta = {};
    meta.nomeMeta = document.getElementById("meta").value;
    meta.id = this.id;

    return meta;
  }

  deletar(id) {
    //Deleta elemento da tabela
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < this.arrayMetas.length; i++) {
      if (this.arrayMetas[i].id == id) {
        this.arrayMetas.splice(i, 1);
        tbody.deleteRow(i);
        this.rows--;
      }
    }
    console.log(this.arrayMetas);
  }
  validaCampo(meta) {
    //Valida campo da tabela
    let mensagem = "";
    if (meta.nomeMeta == "") {
      mensagem += " - Informe o nome da meta \n";
    }
    if (mensagem != "") {
      alert(mensagem);
      return false;
    }

    return true;
  }

  listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.arrayMetas.length; i++) {
      let tr = tbody.insertRow();
      let td_meta = tr.insertCell();
      let td_acao = tr.insertCell();

      td_meta.innerText = this.arrayMetas[i].nomeMeta;

      td_acao.classList.add("center-imgs"); //Criando classe para centralizar as imagens da lixeira
      let imgEdit = document.createElement("img");
      imgEdit.src = "images/bin.png";
      imgEdit.setAttribute(
        "onclick",
        "meta.deletar(" + this.arrayMetas[i].id + ")"
      );

      td_acao.appendChild(imgEdit);
    }
    console.log(this.arrayMetas); //Testando
  }
}
var meta = new Meta();
