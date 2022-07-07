//components
import StepByStep from '../StepByStep/index';
import ChipsSet from '../ChipsSet/ChipsSet';
import ClientOptions from '../SearchOptions/ClientOptions';

import React from 'react'
import Footer from '../Footer/index';

const Body = () => {
    return (
        <>
           <ClientOptions/>
            <StepByStep/>
            <Footer/>
        </>
    )
}

export default Body