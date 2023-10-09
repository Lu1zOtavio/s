var lista1 = document.querySelector("ul");
var lista2 = document.querySelector("ol");
var link = document.querySelector("a");
var tituloElemento = document.getElementById("titulo");
tituloElemento.innerText = "conteudo do h1 modificado";
link.innerText ="tag 'a' modificada";
lista1.innerHTML='<a href="https://prozeducacao.com.br"> Proz</a><br><a href="https://www.w3schools.com/"> w3schools </a><br><a href="https://archive.org/">arquive</a>';
lista2.innerHTML="<li>conteúdo adicionado no ul</li><li>conteúdo adicionado no ul</li><li>conteúdo adicionado no ul</li>";