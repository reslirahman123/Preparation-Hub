import React, { useEffect, useState } from 'react'

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {

        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log("response", response)
        const result = await response.json();
        console.log("result", result)
        setData(result);


      } catch (error) {
        setLoading(true)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    // setTimeout(() => {
    //   fetchData();
    // }, 5000)

    setTimeout(fetchData, 5000)

  }, [])


  return { data, loading, error }
}

export default useFetch