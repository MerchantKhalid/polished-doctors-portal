import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className='w-64 md:w-32 lg:w-48 btn btn-primary bg-gradient-to-r from-primary to-secondary text-white'>{children}</button>
    );
};

export default PrimaryButton;