import Axios from 'axios';

const Api = Axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default Api;