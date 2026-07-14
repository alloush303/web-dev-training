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
