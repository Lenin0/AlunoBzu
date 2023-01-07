import './App.css';
import Cadastro from './componentes/Cadastro';
import Aluno from './componentes/Alunos';
import Grafico from './componentes/Grafico';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Ecola Bzu</h1>
      <BrowserRouter>
      <Nav variant='tabs'>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/Alunos">Tabela Aluno</Nav.Link>
        <Nav.Link as={Link} to="/Grafico">Sobre</Nav.Link>
      </Nav>
      
      <Routes>
          <Route path="/" index element={<Aluno/>}></Route>
          <Route path="/alunos" index element={<Cadastro/>}></Route>
          <Route path="/grafico" index element={<Grafico/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
