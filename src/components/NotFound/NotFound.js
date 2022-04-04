import React from 'react';
import images404 from '../../images/404-error.png'

const NotFound = () => {
    return (
        <div>
            <img src={images404} alt="" className='w-full' />
        </div>
    );
};

export default NotFound;