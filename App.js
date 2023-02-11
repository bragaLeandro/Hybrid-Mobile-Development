import React from 'react';
import ListaUsuarios from './components/ListaUsuarios'

  const usuarios = [
    {
      id: 1,
      name: 'Leandro Alves de Souza Braga',
      university: 'FIAP',
      course: 'Análise e Desenvolvimento de Sistemas',
      universityClass: '2TDST',
      age: 20
    }
  ];
  
 function App() {

  return (
    <ListaUsuarios users={usuarios}/>
  );
}

export default App;