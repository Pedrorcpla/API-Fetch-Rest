window.onload = function(){
  const cadastrar = document.querySelector("#cadastrar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const alterar = document.querySelector("#alterar");
  const deletar = document.querySelector("#deletar");

  //ação de cadastro
  cadastrar.addEventListener("click", function(){
    let formData = new FormData();
    formData.append('nome:',`${nome.value}`);
    formData.append('curso:',`${curso.value}`);

    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa", 
    {
      body: formData,
      method: "post",
      mode: "cors",
      cache: "default"
    }).then(()=>{
          alert("Registro efetuado com Sucesso!");
          limparCampos();
        }
      )
  });

  //listar uma pessoa
  buscar.addEventListener("click",function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
      method: "get",
      mode: "cors",
      cache: "default"
    }).then(response =>{
      response.json().then(data => {
        nome.value = data['nome'];
        curso.value = data['curso'];
      })
    })
  });

  //alterar dados
  alterar.addEventListener("click",function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
      method: "put",
      mode: "cors",
      cache: "default",
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      },
      body:JSON.stringify({
        'nome':`${nome.value}`,
        'curso':`${curso.value}`
      })
    }).then(()=>{
      alert("Registro Alterado com Secesso!");
      limparCampos();
      });
  });

  //deletar registro
  deletar.addEventListener("click",function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`,{
      method: "delete",
      mode: "cors",
      cache: "default"
    }).then(()=>{
      alert("Registro Deletado com Sucesso!");
      limparCampos();
      })
  });

  //limpar campos
  function limparCampos(){
    nome.value = "";
    curso.value = "";
  };
}
