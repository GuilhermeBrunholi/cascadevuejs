import axios from 'axios';

export const localService = {
    getAllUF,
    getCidades,
};

function getAllUF(){
    return axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
}

function getCidades(UF){
    return axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/microrregioes`);
}
