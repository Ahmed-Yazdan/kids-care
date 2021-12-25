import { useState, useEffect } from 'react'

const useGetData = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://ahmed-yazdan.github.io/Healthcare-data-API/data.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return {
        services
    }
}

export default useGetData;