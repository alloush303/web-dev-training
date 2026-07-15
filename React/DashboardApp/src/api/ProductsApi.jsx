import axios from 'axios'

export const getProducts = async () => {
    try {
        let response = await axios.get("https://fakestoreapi.noksha.dev/api/products")
        return response.data.data
    }
    catch (error) {
        alert('Error Fetching Products', error)
        throw error
    }
}

export const getProductById = async (id) => {
    try {
        let response = await axios.get(`https://fakestoreapi.noksha.dev/api/products/${id}`)
        return response.data
    }
    catch (error) {
        alert('Error Fetching Product', error)
        throw error
    }
}
