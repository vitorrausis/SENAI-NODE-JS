import colecaoUf from "../dados/dados.js";

export const buscarUfsPorNome = (nomeuf) => {
  return colecaoUf.filter((uf) =>
    uf.nome.toLocaleLowerCase().includes(nomeuf.toLocaleLowerCase())
  );
};
export const buscarUfs = () => {
  return colecaoUf;
};
export const buscarUfPorId = (id) => {
  const idUf = parseInt(id);
  return colecaoUf.find((uf) => uf.id === idUf);
};
