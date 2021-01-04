import { useEffect, useState } from 'react';
import axios from 'axios'
const useUrlLoader = (url: string, deps: boolean) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(url).then(result => {
            setData(result.data)
            setLoading(false)
        })
    }, [url, deps])
    return [data, loading]
}

export default useUrlLoader