import { useEffect, useState } from "react"

const useData = (apiLink) => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(apiLink)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return [data, setData];
}

export default useData;