import React from 'react';

const List = React.memo(
    ({ data }) => {
        console.log("Im rerendering",data);
        return (
            <div>
                <ul>
                    {data?.map((val, index) => {
                        const { first, last, title } = val.name;
                        return <li key={index}> {`${first} - ${last} - ${title}`}</li>
                    })}
                </ul>
            </div>
        )
    }
)



export default List;