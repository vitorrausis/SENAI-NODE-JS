import colecaoUf from "../dados/dados.js";

export const buscarUfs = () => {
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const IdUF = parseInt(id);
    return colecaoUf.filter(uf => uf.id === IdUF);
}