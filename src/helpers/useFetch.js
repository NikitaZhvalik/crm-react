import { useState, useEffect } from "react";

const useFetch = (url, flag) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
        .then((response) => {
            if (response.ok  !== true) {
                throw Error ('Не получается загрузить данные с сервера(')
            }
            return response.json();
        })
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((error) => error.name === "AbortError" ? console.warn('Запрос был остановлен') : console.warn(error.message))
    }, [flag])

    return {data, isLoading}
}

export default useFetch;