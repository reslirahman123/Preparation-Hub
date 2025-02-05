import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try{
                setLoading(true)
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }catch(error){
                setError(error);
                setLoading(true)
            }finally{
                setLoading(false)
            }
        };

        fetchData();

    }, [url]);

    return { data, loading, error};  

}

export default useFetch;