import React, { Component } from "react";

export default class Info extends Component{
  
  state={
    nome: "Nady",
    idade: 29,
    comida: "brocolis",
    musica:['A Queda', 'Eu Gosto Dela', 'Equalize'],
    artista:['Glória Groove', 'Emicida, Cohen', 'Pitty']
  }
  
  render(){
    return(
      <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Eu tenho {this.state.idade} anos</h2>
        <h3>Eu gosto de {this.state.comida}</h3>
        <p>Minhas músicas favoritas são: </p>
        <ol>
          <li>{this.state.musica[0]} ({this.state.artista[0]})</li>
          <li>{this.state.musica[1]} ({this.state.artista[1]})</li>
          <li>{this.state.musica[2]} ({this.state.artista[2]})</li>
        </ol>
      </div>
    )
  }
}


// Crie uma class component 


// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)


// **Bônus
// Adicione uma imagem da sua fruta favorita via import