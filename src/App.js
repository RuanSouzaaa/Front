import React from 'react';
import DevForm from './componentes/DevForm';
import './Global.css';
import './App.css';

function App(){
  return (
    <div id="app">
      <aside>
        <strong>Cadastro</strong>
        <DevForm onSubmit={''}/>
      </aside>
    </div>
  );
}
export default App;