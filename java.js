
let usuarios = [];


function adicionarUsuario(nome, email, senha, idade) {
  
  if (nome === "" || email === "" || senha === "" || idade === "") {
    console.log("Preencha todos os campos!");
    return;
  }

 
  if (idade <= 0) {
    console.log("Idade inválida!");
    return;
  }

  
  if (usuarios.find(usuario => usuario.email === email)) {
    console.log("Email já cadastrado!");
    return;
  }

  
  usuarios.push({ nome, email, senha, idade });
  console.log("Usuário cadastrado com sucesso!");
}


function listarUsuarios() {
  if (usuarios.length === 0) {
    console.log("Nenhum usuário cadastrado!");
    return;
  }

  console.log("Usuários cadastrados:");
  usuarios.forEach((usuario, index) => {
    console.log(`ID: ${index + 1} | Nome: ${usuario.nome} | Email: ${usuario.email} | Idade: ${usuario.idade}`);
  });
}



// Exemplo de uso
adicionarUsuario("João", "joao@example.com", "123456", 25);
adicionarUsuario("Maria", "maria@example.com", "123456", 30);
listarUsuarios();