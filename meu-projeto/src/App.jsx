import { useState } from 'react'
import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/frase'
import List from './components/List'




function App() {

  const nome = "Eduardo"
  
  return (
      <div>
        <h1>Testando o css</h1>
        <Frase/>
        <Frase/>
        <SayMyName nome = "Filipe"/>
        <SayMyName nome = "Breno"/>
        <SayMyName nome = {nome}/>
        <Pessoa
          nome= "Rodrigo"
          idade="28"
          profissao="Programador"
          foto="https//via.placeholder.com/150"
        />
        <List/>
      </div>
  )
}

export default App
