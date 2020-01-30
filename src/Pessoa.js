import React from 'react';
class Pessoa extends React.Component {
    constructor(pessoa){
      super(pessoa)
      this.state = {
        nome :"Julio"
      }
      this.verifica = this.verifica.bind(this);
    };
    verifica() {
      this.setState( { nome: "Lucas"});
      console.log(this.state)
    }
   
  render() {
    return (
      <>
        <h1>
          {this.state.nome}
        </h1>
        <button style={{width: '20px', height: '20px'}} onClick={this.verifica} ></button>
      </>
    );
  }
}
export default Pessoa;