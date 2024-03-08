import axios from 'axios'

export const fetchData = () => {

  return axios
    .get('https://suppliers.depembroke.fr/api/suppliers')
    .then((response) => {
      console.log('Datos recibidos:', response.data);
      return  response.data.data;

    })
    .catch((err) => {
      console.error(err);
    });
};