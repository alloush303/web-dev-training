import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(link) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setErorr] = useState(null)

    useEffect(() => {
        setLoading(true)
        setErorr(null)

        const fetchData = async (link) => {
            try {
                const responce = await axios.get(link)
                setData(responce.data.data)
            } catch (err) {
                setErorr(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData(link)
    }, [link])

    console.log(data)
    return { data, loading, error }
}

