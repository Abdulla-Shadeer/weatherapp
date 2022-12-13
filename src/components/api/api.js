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
        
        // fetch from api
        const fetchWeather = async () => {
            await axios.get(url)
                .then((response) => {
                    setData(response.data)
                    setTime(response.data.list[0].dt)

                    //setting fetched time in the cache data in order to check expiry
                    let fetchedTime = new Date().getTime()
                    let dataToInsert = { ...response.data, 'fetchedTime': fetchedTime }

                    localStorage.setItem(id.toString(), JSON.stringify(dataToInsert))
                    console.log("fetched from api...")
                })
                .catch((err) => {
                    setError(err)
                })
                .finally(() => {
                    setLoading(false)
                })
        }



        // ==================== checking cache data, expiry ===============================

        const cachData = localStorage.getItem(id.toString())
        const now = new Date().getTime()
        const cacheExpiry = 1000 * 60 * 5 //in milli seconds

        if (cachData) {
            const fetchedTime = JSON.parse(cachData).fetchedTime

            //checking the cache data expired or not
            if ((now - fetchedTime) > cacheExpiry) {
                //if expired
                localStorage.removeItem(id.toString())
                console.log("cache expired...")
                fetchWeather()
            } else {
                //if not expired
                setData(JSON.parse(cachData))
                setTime(JSON.parse(cachData).list[0].dt)
                setLoading(false)
                console.log("fetched from cach...")
            }
        } else {
            // if no cache data
            fetchWeather()
        }

    }, [id, url])

    return { data, error, loading, time }
}
