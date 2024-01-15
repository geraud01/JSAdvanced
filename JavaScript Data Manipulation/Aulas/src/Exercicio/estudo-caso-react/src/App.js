// App.js
import React from 'react';

const carrosData = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2022, preco: 50000 },
  { id: 2, marca: 'Honda', modelo: 'Civic', ano: 2021, preco: 45000 },
  { id: 3, marca: 'Ford', modelo: 'Focus', ano: 2023, preco: 48000 },
  // Adicione mais dados conforme necessário
];

const CarrosList = () => {
  const carrosMarcas = carrosData.map(carro => carro.marca);
  const precoTotal = carrosData.reduce((total, carro) => total + carro.preco, 0);
  const carrosFiltrados = carrosData.filter(carro => carro.ano >= 2022);

  return (
    <div>
      <h2>Lista de Carros</h2>
      <p>Marca de cada carro: {carrosMarcas.join(', ')}</p>
      <p>Preço total dos carros: ${precoTotal}</p>
      <p>Carros fabricados a partir de 2022: {carrosFiltrados.length}</p>
      <p>Detalhes dos carros:</p>
      <ul>
        {carrosData.map(carro => (
          <li key={carro.id}>
            {carro.marca} {carro.modelo} ({carro.ano})
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <CarrosList />
    </div>
  );
};

export default App;
