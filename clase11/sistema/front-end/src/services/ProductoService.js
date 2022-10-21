import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async getProductos() {
        apiClient.defaults.headers.common['authorization'] =
        `Bearer ${ JSON.parse(localStorage.getItem('usuario')).token }`
        try {
            const datos = await apiClient.get('/api/producto');
            return datos.data;                
        } catch {
            throw ('Error de conexion')
        }
        /*
        const funError = () => { throw 'Error'};
        const datos = await apiClient.get('/api/productos')
            .then(response =>{
                return response.data}
                )
            .catch(funError)
            .finally()
        */    
    },
    async addProductos(producto) {
        apiClient.defaults.headers.common['authorization'] =
        `Bearer ${ JSON.parse(localStorage.getItem('usuario')).token }`
        try {
            await apiClient.post('/api/producto',producto);
        } catch {
            throw ('Error de conexion')
        }
    }  
}