import logo from './logo.svg';
import './App.css';
import Sobre from './components/Sobre';
import Jobs from './components/Jobs';
import Projetos from './components/Projetos';
import Contato from './components/Contato';




function App() {
  return (
    <div className="App">
      <Sobre />
      <Jobs />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
