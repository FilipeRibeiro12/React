import { useState } from 'react'
import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {

  const nome = "Eduardo"
  
  return (
      <div>
        <SayMyName nome = "Filipe"/>
        <SayMyName nome = "Breno"/>
        <SayMyName nome = {nome}/>
        <Pessoa
          nome= "Rodrigo"
          idade="28"
          profissao="Programador"
          foto="https//via.placeholder.com/150"
        />
      </div>
  )
}

export default App
