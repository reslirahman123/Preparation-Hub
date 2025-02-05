import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import List from './List';

const URL = 'https://randomuser.me/api?results=10';
const User = () => {

    const { data, loading, error } = useFetch(URL);

    const [listData, setListData] = useState([]);
    const [count, setCount] = useState(1);

    useEffect(() => {
        if(data?.results){
            setListData(data.results);
        }
    },[data])


    const handleMore = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setListData((prevData) => [...prevData, ...data.results]);
    }

    return (
        <div>
            <List data={listData} /> 
            <button onClick={handleMore}>Load More</button>
            <button onClick={() => setCount(count+1)}>Increment {count}</button>
        </div>
    )
}

export default User;