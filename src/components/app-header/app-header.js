import React from 'react';

import './app-header.css';


const AppHeader = ({liked, allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1> Uskova Lilia</h1>
            <h2>{allPosts} записів, з них сподобалось {liked}</h2>
        </div>
    )
}

export default AppHeader;