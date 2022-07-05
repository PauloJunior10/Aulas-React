import { useState } from "react";

export default function App() {
// localStorage.setItem("nome", "bruno") // cria uma chave e adiciona um valor para ela, se ainda não existia
// localStorage.setItem("nome", "rafa") // se já existe um valor ele apenas altera
// localStorage.getItem() // coloque o curso em cima do método
// localStorage.removeItem()

const [nome, setNome] = useState()



const armazenar = (chave,valor) => {
  localStorage.setItem(chave, valor)
}

const verItem = (chave) => {
  alert(localStorage.getItem(chave))
}

const remover = (chave) => {
  localStorage.removeItem(chave)
}
  return (
    <div>
      <>
      <label>Digite um nome</label><br/>
      <input type="text" value={nome} onChange={(e) =>setNome (e.target.value)}/>
      </><br/>
      <button onClick={() => armazenar('ls_nome', nome)}> Gravar Nome </button>
      <button onClick={() => verItem('ls_nome')}>Ver Nome</button>
      <button onClick={()=>remover('ls_nome')}>X</button>
    </div>
  );
}
