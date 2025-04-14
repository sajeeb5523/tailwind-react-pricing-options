import React from 'react';

const Link = ({route}) => {
    console.log(route);
    return (
        <div>
            <li className='px-4 lr:mr-10 hover:bg-amber-400'><a href={route.path}>{route.name}</a></li>
        </div>
        
    );
};

export default Link;