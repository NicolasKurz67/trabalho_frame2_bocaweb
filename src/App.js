import './App.css';
import { Component } from 'react';
import { Header } from './components/Header';
import { Corpo } from './components/Corpo';
import { Footer } from './components/Footer';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {odas} = this.state;

    return(
      <section className="container">
        
       <Header
          search={this.state.busca}
          buscaODA={this.buscaODA}
       />

      <Corpo
        resultado={odas}
      ></Corpo>
      <Footer/>
      </section>
    )
  }

}

export default App;