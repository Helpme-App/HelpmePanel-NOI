import React from 'react';
import EmerCard from './EmerCard';


const EmerContainer = (key) => {

    return (
        <div key={key} className='emergency-container'>
            <EmerCard />
        </div>
    )

}



export default EmerContainer; 