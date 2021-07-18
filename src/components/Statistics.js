import React from 'react';

const Statistics = (props) => {
    const {name, count} = props
    return ( 
        <div>
            <h2>{name}</h2>
            <h1>{count}</h1>
        </div>
     );
}
 
export default Statistics;