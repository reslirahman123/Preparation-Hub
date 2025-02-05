import React from 'react'
import useFetch from './useFetch'

const Users = () => {

   const {data, error, loading} = useFetch()

   if(loading) return <div>Loading...</div>
   if(error) return <div>{error}</div>

    return (
        <div>
            <ul>
                {data.map((items, index) => {
                    const { id, name, phone} = items;
                    return (<li key={index}>
                        <p>id: {id}</p>
                        <p>{name}</p>
                        <p>{phone}</p>
                        
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Users