import React from 'react';
import carrosData from './data';

const ManipulacaoDados = () => {
  // Map
  const marcas = carrosData.map(carro => carro.marca);

  // Reduce
  const precoTotal = carrosData.reduce((total, carro) => total + carro.preco, 0);

  // Filter
  const carros2022 = carrosData.filter(carro => carro.ano >= 2022);

  // ForEach (apenas para exibição no console)
  carrosData.forEach(carro => {
    console.log(`ID: ${carro.id}, Marca: ${carro.marca}, Modelo: ${carro.modelo}`);
  });

  return (
    <div>
      <h2>Manipulação de Dados</h2>
      <p>Marcas de carros: {marcas.join(', ')}</p>
      <p>Preço total dos carros: ${precoTotal}</p>
      <p>Carros fabricados a partir de 2022: {carros2022.length}</p>
    </div>
  );
};

export default ManipulacaoDados;
