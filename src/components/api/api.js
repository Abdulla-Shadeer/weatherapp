import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(id) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState(null)

    const url = process.env.REACT_APP_API_URL + id + "&units=metric&appid=" + process.env.REACT_APP_API_KEY

    useEffect(() => {

        setLoading(true)

        const fetchWeather = async () => {
            await axios.get(url)
                .then((response) => {
                    setData(response.data)
                    setTime(response.data.list[0].dt)
                    localStorage.setItem(response.data.list[0].id.toString(), JSON.stringify(response.data))
                    console.log("fetched from api")
                })
                .catch((err) => {
                    setError(err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

        const cachData = localStorage.getItem(id.toString())

        if (cachData) {
            setData(JSON.parse(cachData))
            setTime(JSON.parse(cachData).list[0].dt)
            setLoading(false)
            console.log("fetched from cach")
        } else {
            fetchWeather()
        }

    }, [id, url])

    return { data, error, loading, time }
}